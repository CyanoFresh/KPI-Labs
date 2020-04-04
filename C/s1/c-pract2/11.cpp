#include <iostream>

#ifdef WIN32

#include <windows.h>

#else
#include <unistd.h>
#endif // win32

using namespace std;

void sleep(int sec) {
#ifdef WIN32
    Sleep(sec * 1000);
#else
    usleep(sec);
#endif // win32
}

void sleep(const char *seconds) {
    int sec = atoi(seconds);

    return sleep(sec);
}

int main() {
    cout << "Sleeping 1 sec...\n";
    sleep(1);
    cout << "Sleeping 10 sec...\n";
    sleep("10");
    cout << "Done\n";
}
