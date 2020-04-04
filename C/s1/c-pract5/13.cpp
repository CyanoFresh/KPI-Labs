
class MySecondClassName {
    int n;
public:
    explicit MySecondClassName(int n) : n(n) {}
};

class MyLongClassName {
public:
    MySecondClassName myNestedObject;

    explicit MyLongClassName(const MySecondClassName &nested) : myNestedObject(nested) {}
};

void testFunc(MyLongClassName &MyLongClassName) {
    // Alias for the myNestedObject field
    MySecondClassName &a = MyLongClassName.myNestedObject;
    // then use short alias named `a` instead of my1.myNestedObject...
}

int main() {
    MySecondClassName link = MySecondClassName(2);
    MyLongClassName my1 = MyLongClassName(link);
    testFunc(my1);
}