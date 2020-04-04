#include <iostream>

using namespace std;

class myclass {
public:
    myclass(){
        cout << "Constructing normally\n";
    }

    myclass(const myclass &obj){
        cout << "Constructing copy\n";
    }

    myclass f(){
        myclass temp;
        return temp;
    }

    /**
     * obj is copied every time function is called
     * temp is copied from obj
     */
    myclass g(myclass obj){
        myclass temp = obj;
        return temp;
    }
};

int main() {
    myclass obj;
    obj = obj.f();
    obj = obj.g(obj);
    return 0;
}
