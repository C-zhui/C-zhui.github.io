#include <bits/stdc++.h>
#include <mpich/mpi.h>

using namespace std;

void readAB(vector<int> &A, vector<int> &B, const char *fileA, const char *fileB, int N)
{
    A.resize(0);
    B.resize(0);
    ifstream fa(fileA);
    copy_n(
        istream_iterator<int>(fa),
        N * N,
        back_inserter(A));
    ifstream fb(fileB);
    copy_n(
        istream_iterator<int>(fb),
        N * N,
        back_inserter(B));
}

int main(int argc, char *argv[])
{
    int rank, size;
    MPI_Init(&argc, &argv);
    MPI_Comm_size(MPI_COMM_WORLD, &size);
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);

    vector<int> A, B;
    const int N = 4;
    if (rank == 0)
    {
        readAB(A, B, "A.txt", "B.txt", 4);
    }

    MPI_Barrier(MPI_COMM_WORLD);

    int ax, ay, bx, by;
    MPI_Status status;
    // 计算各自的偏移量
    ax = bx = rank / N;
    ay = by = rank % N;
    ay = (ay + rank / N) % N;
    bx = (bx + rank % N) % N;

    int buf[4] = {ax, ay, bx, by};
    int bufab[2];
    int val = 0;

    if (rank == 0)
    {
        printf("%d %d %d %d \n", ax, ay, bx, by);
        val += A[ax * N + ay] * B[bx * N + by];
        // printf("%d\n", rank);
        for (int i = 1; i < size; i++)
        {
            MPI_Recv(buf, 4, MPI_INT, MPI_ANY_SOURCE, 0, MPI_COMM_WORLD, &status);
            int _ax = buf[0], _ay = buf[1], _bx = buf[2], _by = buf[3];
            printf("%d %d %d %d \n", _ax, _ay, _bx, _by);

            bufab[0] = A[_ax * N + _ay];
            bufab[1] = B[_bx * N + _by];
            MPI_Send(bufab, 2, MPI_INT, status.MPI_SOURCE, 1, MPI_COMM_WORLD);
        }
        bufab[0] = A[ax * N + ay], bufab[1] = B[bx * N + by];
    }
    else
    {
        MPI_Send(buf, 4, MPI_INT, 0, 0, MPI_COMM_WORLD);
        MPI_Recv(bufab, 2, MPI_INT, 0, 1, MPI_COMM_WORLD, &status);
        val += bufab[0] * bufab[1];
    }

    for (int i = 1; i < N; i++)
    {
        int bufabcp[2] = {bufab[0], bufab[1]};

        if (rank % 2 == 0) // 发送a
        {
            MPI_Send(bufabcp, 1, MPI_INT, rank % N == 0 ? rank + N - 1 : rank - 1, 2, MPI_COMM_WORLD);
            MPI_Recv(bufab, 1, MPI_INT, (rank + 1) % N == 0 ? rank - N + 1 : rank + 1, 2, MPI_COMM_WORLD, &status);
        }
        else
        {
            MPI_Recv(bufab, 1, MPI_INT, (rank + 1) % N == 0 ? rank - N + 1 : rank + 1, 2, MPI_COMM_WORLD, &status);
            MPI_Send(bufabcp, 1, MPI_INT, rank % N == 0 ? rank + N - 1 : rank - 1, 2, MPI_COMM_WORLD);
        }

        if (rank / N % 2 == 0) //发送b
        {
            MPI_Send(bufabcp + 1, 1, MPI_INT, rank - N < 0 ? rank + N * (N - 1) : rank - N, 3, MPI_COMM_WORLD);
            MPI_Recv(bufab + 1, 1, MPI_INT, (rank + N) / N < N ? rank + N : rank % N, 3, MPI_COMM_WORLD, &status);
        }
        else
        {
            MPI_Recv(bufab + 1, 1, MPI_INT, (rank + N) / N < N ? rank + N : rank % N, 3, MPI_COMM_WORLD, &status);
            MPI_Send(bufabcp + 1, 1, MPI_INT, rank - N < 0 ? rank + N * (N - 1) : rank - N, 3, MPI_COMM_WORLD);
        }

        val += bufab[0] * bufab[1];
        MPI_Barrier(MPI_COMM_WORLD);
    }

    vector<int> res;
    if (rank == 0)
    {
        res.resize(N * N);
        res[0] = val;
        for (int i = 1; i < size; i++)
        {
            MPI_Recv(&val, 1, MPI_INT32_T, MPI_ANY_SOURCE, 5, MPI_COMM_WORLD, &status);
            res[status.MPI_SOURCE] = val;
        }

        for (int i = 0; i < res.size(); i++) // 输出结果
            printf("%d%s", res[i], (i + 1) % N != 0 ? " " : "\n");
    }
    else
    {
        MPI_Send(&val, 1, MPI_INT32_T, 0, 5, MPI_COMM_WORLD);
    }

    MPI_Finalize();
    return 0;
}
