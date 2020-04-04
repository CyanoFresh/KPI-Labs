#include <iostream>
#include <cstring>

using namespace std;

void *reverse(char *str, uint8_t count = 0) {
    char *pStart = str;
    char *pEnd = str + strlen(str) - 1;
    int i = 0;
    while (pStart < pEnd) {
        char temp = *pStart;
        *pStart = *pEnd;
        *pEnd = temp;
        pStart++;
        pEnd--;

        i++;

        if (count != 0 && i == count) {
            break;
        }
    }
}

int main() {
    char str[] = "Hello";
    reverse(str, 1);
    cout << str << endl;
}