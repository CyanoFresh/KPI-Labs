#include <iostream>

using namespace std;

class Card {
public:
    string title;
    string author;
    int usedCount = 0;

    void store(const string &title, const string &author, int usedCount);

    void show() {
        cout << title << " - " << author << ", used " << usedCount << " times\n";
    };
};

void Card::store(const string &title, const string &author, int usedCount) {
    this->title = title;
    this->author = author;
    this->usedCount = usedCount;
}

int main() {
    Card card1, card2, card3;
    card1.store("Theory of everything", "Steven Hawking", 3);
    card2.store("Theory of everything 2", "Steven Hawking", 6);
    card3.store("Theory of everything 3", "Steven Hawking", 234234);
    card1.show();
    card2.show();
    card3.show();
}