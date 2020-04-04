class Foo {
public:
    explicit operator int() const {
        return 42;
    }
};

class Bar {
public:
    Bar(Foo) {}
};

void baz(Bar) {

}

void baz(int) {

}

int main() {
    Foo x;
    baz(x);
}