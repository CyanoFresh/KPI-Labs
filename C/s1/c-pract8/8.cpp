#include <iostream>

using namespace std;

class A {
    int i;
public:
    A(int a) { i = a; }
};

class B {
    int j;
public:
    B(int a) { j = a; }
};

class C : public A, public B {
    int k;
public:
    C(int a, int a1, int k) : A(a), B(a1), k(k) {}
    /* Create C() so that it initializes k and passes arguments to both A() and B() */
};
