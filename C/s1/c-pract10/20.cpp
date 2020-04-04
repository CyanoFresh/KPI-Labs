#include <iostream>
#include <fstream>
#include <vector>

using namespace std;

int main() {
    ifstream file("20.txt");

    string buff;
    struct alphabet {
        char symb;
        int count;
    };
    vector<struct alphabet> alphacount;
    for (int i = 0; file >> buff[i]; i++) {
        if (i == 0) alphacount.push_back({buff[i], 1});
        else
            for (int j = 0; j < (int) alphacount.size(); j++) {
                if (alphacount[j].symb == buff[i]) {
                    alphacount[j].count++;
                    break;
                } else if (alphacount[j].symb != buff[i] && j == (int) alphacount.size() - 1) {
                    alphacount.push_back({buff[i], 1});
                    break;
                }
            }
    }

    cout << "Result: " << endl;

    for (auto & i : alphacount)
        cout << "  " << i.symb << " - " << i.count << " symbols" << endl;

    return 0;
}