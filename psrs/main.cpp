#include <bits/stdc++.h>
#include <mpich/mpi.h>

using namespace std;

class Seg
{
  public:
    vector<int> buf;
    int i;

    Seg() = default;

    Seg(const Seg &o)
    {
        this->buf = move(o.buf);
        this->i = o.i;
    }

     Seg& operator=(const Seg &o)
    {
        this->buf = move(o.buf);
        this->i = o.i;
        return *this;
    }

    Seg(const vector<int> &buf)
    {
        this->i = 0;
        this->buf = move(buf);
    }

    bool empty()
    {
        return this->i >= buf.size();
    }

    int get_and_move()
    {
        return buf[i++];
    }

    bool operator<(const Seg &b) const
    {
        return this->buf[this->i] > b.buf[b.i];
    }
};

void readfile(vector<int> &datas)
{
    datas.resize(0);
    ifstream ifs("data.txt");
    istream_iterator<int> ii(ifs);
    istream_iterator<int> iiend;
    copy(ii, iiend, back_inserter(datas));
}

int main(int argc, char *argv[])
{
    int rank, size;
    MPI_Init(&argc, &argv);
    MPI_Comm_size(MPI_COMM_WORLD, &size);
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);

    vector<int> datas;

    if (rank == 0) // 读取文件数据
        readfile(datas);
    if (rank == 0)
        cout << "读取数据完毕" << endl;
    MPI_Barrier(MPI_COMM_WORLD);

    vector<int> sample;

    int sample_len;
    int len;
    MPI_Status status;

    if (rank == 0)
    { // 数据分发
        int work_size = size - 1;
        int seg_len = datas.size() / work_size;
        for (int i = 1; i < size; i++)
        {
            int _len;
            if (i == size - 1)
                _len = datas.size() - (i - 1) * seg_len;
            else
                _len = seg_len;
            MPI_Send(&_len, 1, MPI_INT32_T, i, 0, MPI_COMM_WORLD);
            MPI_Send(datas.data() + (i - 1) * seg_len, _len, MPI_INT32_T, i, 1, MPI_COMM_WORLD);
        }
    }
    else
    {
        MPI_Recv(&len, 1, MPI_INT32_T, 0, 0, MPI_COMM_WORLD, &status);
        datas.resize(len);
        MPI_Recv(datas.data(), datas.size(), MPI_INT32_T, 0, 1, MPI_COMM_WORLD, &status);
    }

    if (rank == 0)
        cout << "散播数据完毕" << endl;

    MPI_Barrier(MPI_COMM_WORLD);

    if (rank != 0) // 局部排序
    {
        sort(begin(datas), end(datas));
    }

    int nothing;
    if (rank == 0)
    {
        for (int i = 1; i < size; i++)
        {
            MPI_Send(&len, 1, MPI_INT32_T, i, 10, MPI_COMM_WORLD);
            MPI_Recv(&nothing, 1, MPI_INT32_T, i, 11, MPI_COMM_WORLD, &status);
        }
    }
    else
    {
        MPI_Recv(&nothing, 1, MPI_INT32_T, 0, 10, MPI_COMM_WORLD, &status);
        printf("rank %d,len %ld \n", rank, datas.size());
        for (auto a : datas)
        {
            printf("%d ", a);
        }
        printf("\n");
        MPI_Send(&nothing, 1, MPI_INT32_T, 0, 11, MPI_COMM_WORLD);
    }

    MPI_Barrier(MPI_COMM_WORLD);
    // 每个进程选出代表元素，提交给0号
    if (rank == 0)
    { // 0 号 接收
        sample.resize(size * size);
        sample_len = 0;
        int recv_len = 0;
        for (int i = 1; i < size; i++)
        {
            MPI_Recv(&recv_len, 1, MPI_INT32_T, i, 2, MPI_COMM_WORLD, &status);
            MPI_Recv(sample.data() + sample_len, recv_len, MPI_INT32_T, i, 3, MPI_COMM_WORLD, &status);
            sample_len += recv_len;
        }
    }
    else
    { // 选出代表
        sample.resize(0);
        int delta = len / size;
        if (!delta)
            delta = 1;
        for (int i = 0; i < len; i += delta)
            sample.push_back(datas[i]);
        // 发送
        int _sample_size = sample.size();
        MPI_Send(&_sample_size, 1, MPI_INT32_T, 0, 2, MPI_COMM_WORLD);
        MPI_Send(sample.data(), sample.size(), MPI_INT32_T, 0, 3, MPI_COMM_WORLD);
    }

    if (rank == 0)
        cout << "采样接收完毕" << endl;
    MPI_Barrier(MPI_COMM_WORLD);

    int i = 0, j = 0;
    if (rank == 0)
    { // 排序样本，采样，广播
        // 1 排序
        sort(begin(sample), begin(sample) + sample_len);
        cout << "排序的样本" << endl;
        for (auto a : sample)
        {
            printf("%d ", a);
        }
        putchar('\n');
        // 2 采样
        for (i = size, j = 0; i < sample_len; i += size)
            sample[j++] = sample[i];
        cout << "采样结果" << endl;
        for (i = 0; i < j; i++)
            cout << sample[i] << " ";
        cout << endl;
        sample_len = j;
    }

    MPI_Bcast(&sample_len, 1, MPI_INT32_T, 0, MPI_COMM_WORLD);
    if (rank != 0)
    {
        sample.resize(sample_len);
    }
    MPI_Bcast(sample.data(), sample_len, MPI_INT32_T, 0, MPI_COMM_WORLD);
    if (rank == 0)
        cout << "广播采样" << endl;
    MPI_Barrier(MPI_COMM_WORLD);

    // 分段发回
    if (rank != 0)
    { //
        int last = 0;
        j = 0;
        for (i = 0; i < sample_len; i++)
        {
            while (j < datas.size() && datas[j] < sample[i])
                j++;
            int seg_size = j - last;
            MPI_Send(&seg_size, 1, MPI_INT32_T, 0, 4, MPI_COMM_WORLD);
            printf("rank %d send data ,size %d ,seg %d \n", rank, seg_size, sample[i]);
            MPI_Send(datas.data() + last, seg_size, MPI_INT32_T, 0, 5, MPI_COMM_WORLD);
            last = j;
            MPI_Barrier(MPI_COMM_WORLD);
        }

        i--; // 最后一段
        while (j < datas.size() && datas[j] >= sample[i])
            j++;
        int seg_size = j - last;
        MPI_Send(&seg_size, 1, MPI_INT32_T, 0, 6, MPI_COMM_WORLD);
        printf("rank %d send data ,size %d ,seg %d \n", rank, seg_size, sample[i]);
        MPI_Send(datas.data() + last, seg_size, MPI_INT32_T, 0, 7, MPI_COMM_WORLD);
        last = j;
        MPI_Barrier(MPI_COMM_WORLD);
    }
    else
    {
        datas.resize(0);
        priority_queue<Seg> multiRoads;
        for (i = 0; i < sample_len; i++)
        { // 对每个采样
            for (j = 1; j < size; j++)
            {
                int seg_size;
                vector<int> seg_data;
                MPI_Recv(&seg_size, 1, MPI_INT32_T, j, 4, MPI_COMM_WORLD, &status);
                seg_data.resize(seg_size);
                MPI_Recv(seg_data.data(), seg_size, MPI_INT32_T, j, 5, MPI_COMM_WORLD, &status);
                Seg seg(seg_data);
                multiRoads.push(seg);
            }
            MPI_Barrier(MPI_COMM_WORLD);

            while (multiRoads.size())
            {
                auto data = multiRoads.top();
                multiRoads.pop();
                datas.push_back(data.get_and_move());
                if (!data.empty()) // 非空放回
                    multiRoads.push(data);
            }
        }

        for (j = 1; j < size; j++)
        {
            int seg_size;
            vector<int> seg_data;
            MPI_Recv(&seg_size, 1, MPI_INT32_T, j, 6, MPI_COMM_WORLD, &status);
            seg_data.resize(seg_size);
            MPI_Recv(seg_data.data(), seg_size, MPI_INT32_T, j, 7, MPI_COMM_WORLD, &status);
            Seg seg(seg_data);
            multiRoads.push(seg);
        }
        MPI_Barrier(MPI_COMM_WORLD);
        while (multiRoads.size())
        {
            auto data = multiRoads.top();
            multiRoads.pop();
            datas.push_back(data.get_and_move());
            if (!data.empty()) // 非空放回
                multiRoads.push(data);
        }
    }

    if(rank==0){
        printf("datas size :%d\n",datas.size());
        for(auto a : datas){
            printf("%d ",a);
        }
        putchar('\n');
    }

    MPI_Finalize();
    return 0;
}
