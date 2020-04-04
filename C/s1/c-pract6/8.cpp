#include <iostream>

using namespace std;

int dif(int a, int b) {
    return a-b;
}
float dif(float a, float b) {
    return a-b;
}

int main() {
    int(*fp1)(int, int);
    float(*fp2)(float, float);
    fp1=dif;
    fp2=dif;
    cout << fp1(3,4) << endl;
    cout << fp2(3.1,4.4) << endl;
}