#include <iostream>
#include <cstring>

using namespace std;

void rev_str(char *source) {
    int n = strlen(source);

    for (int i = 0; i < n / 2; i++)
        swap(source[i], source[n - i - 1]);
}

void rev_str(const char *source, char *destination) {
    strcpy(destination, source);

    rev_str(destination);
}

int main() {
    char s1[80], s2[80];;

    strcpy(s1, "I am the only one");

    cout << s1 << "\n";
    cout << s2 << "\n";

    rev_str(s1, s2);

    cout << s1 << "\n";
    cout << s2 << "\n";

    rev_str(s1);

    cout << s1 << "\n";
    cout << s2 << "\n";
}
