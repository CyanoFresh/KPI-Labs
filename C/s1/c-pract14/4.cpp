#include <iostream>
#include <cstring>

using namespace std;

class output {
    static char outbuf[255];
    static int inuse;
    static int oindex;
    char str[80]{};
    int i = 0;
    int who;
public:
    output(int w, const char *s) {
        strcpy(str, s);
        who = w;
    }

    int putbuf() {
        if (!str[i]) {
            inuse = 0;
            return 0;
        }
        if (!inuse) {
            inuse = who;
        }
        if (inuse != who) {
            cout << "Object #" << who << " is denied to put" << endl;
            return -1;
        }
        if (str[i]) {
            outbuf[oindex] = str[i];
            cout << "Object #" << who << " put " << str[i] << " into buffer" << endl;
            i++;
            oindex++;
            outbuf[oindex] = '\0';
            return 1;
        }
        return 0;
    }

    void show() { cout << outbuf << endl; }
};

char output::outbuf[255];
int output::inuse = 0;
int output::oindex = 0;

int main() {
    output o1(1, "test"), o2(2, " yep ");
    while (o1.putbuf() | o2.putbuf());
    o1.show();
}