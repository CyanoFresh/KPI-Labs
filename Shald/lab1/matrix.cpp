#include <iostream>
#include <vector>

using namespace std;

class Matrix {
    vector<vector<int>> matrix;
    int n, m;
public:
    Matrix(int n, int m) {
        this->n = n;
        this->m = m;

        for (int i = 0; i < n; ++i) {
            vector<int> row;
            row.reserve(m);

            for (int j = 0; j < m; ++j) {
                row.push_back(rand() % 10);
            }

            matrix.push_back(row);
        }
    }

    void print() {
        for (auto &i : matrix) {
            for (int j : i) {
                cout << j << " ";
            }
            cout << endl;
        }
    }

    void transpose() {
        vector<vector<int>> resultMatrix(m, vector<int>());

        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < m; ++j) {
                resultMatrix[j].push_back(matrix[i][j]);
            }
        }

        matrix = resultMatrix;
    }
};

int main() {
    int n = 3, m = 2;
    Matrix matrix(n, m);
    matrix.print();
    cout << endl;
    matrix.transpose();
    matrix.print();
}