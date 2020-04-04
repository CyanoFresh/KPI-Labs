#include <iostream>
#include "./File.h"

using namespace std;

void handleCmd(const char cmd, File &file1, File &file2) {
    cout << "\n";

    switch (cmd) {
        case '1':
            cout << "Creating File #1" << endl;
            cin >> file1;
            cout << "\nCreating File #2" << endl;
            cin >> file2;
            break;
        case '2':
            cout << "File #1:" << endl;
            cout << file1;
            cout << "File #2:" << endl;
            cout << file2;
            break;
        case '3':
            if (file1 == file2) {
                cout << "File #1 is equal to File #2" << endl;
            } else {
                cout << "File #1 is not equal to File #2" << endl;
            }

            break;
        case '4':
            cout << "File #1:" << endl;
            cout << (int) file1 << endl;
            cout << "File #2:" << endl;
            cout << (int) file2 << endl;

            break;
        case '5':
            cout << "Result file:" << endl;
            cout << (file1 + file2) << endl;

            break;
        case '6':
            cout << "Copying File #2 to File #3:" << endl;

            {
                File file3 = file2;
                cout << file3;
            }

            break;
        case '7':
            cout << "Deleting Files..." << endl;
            delete &file1;
            delete &file2;

            break;
        default:
            cerr << "Invalid option number" << endl;
            break;
    }

    cout << "\n";
}

int main() {
    File file1, file2;

    char cmd;

    do {
        cout << "Menu:\n\n";
        cout << "|1|  Create Files\n";
        cout << "|2|  Print Files\n";
        cout << "|3|  Compare Files\n";
        cout << "|4|  Cast Files to int\n";
        cout << "|5|  Sum Files\n";
        cout << "|6|  Copy\n";
        cout << "|7|  Delete Files from memory\n";
        cout << "|0|  Exit\n\n";
        cout << "Enter option number:" << endl;

        cin >> cmd;

        try {
            handleCmd(cmd, file1, file2);
        } catch (invalid_argument &e) {
            cerr << e.what() << endl;
            continue;
        }
    } while (cmd != '0');

    cout << "Bye";
}