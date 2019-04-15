#include <bits/stdc++.h>

using namespace std;

vector<int> mul(const vector<int> &a, const vector<int> &b, int n, int m, int p)
{
    // n x m
    // m x p
    vector<int> C(n * p, 0);

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < p; j++)
        {
            int sum = 0;
            for (int k = 0; k < m; k++)
            {
                sum += a[i * m + k] * b[k * p + j];
            }
            C[i * p + j] = sum;
        }
    }
    return C;
}

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

int main()
{
    vector<int> A, B;
    readAB(A, B, "A.txt", "B.txt", 4);
    vector<int> C = mul(A, B, 4, 4, 4);
    for (int i = 0; i < C.size(); i++)
    {
        printf("%d%s", C[i], (i + 1) % 4 == 0 ? "\n" : " ");
    }
    
    return 0;
}