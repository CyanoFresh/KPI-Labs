#include <vector>

using namespace std;

class myvector : public vector<int> {
public:
    myvector(int y) {

    }
};

void f(vector<int> v) {

}

int main() {
    vector<int> a;
    f(5);
}