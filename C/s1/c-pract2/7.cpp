//#include <cstdlib>
#include <iostream>

using namespace std;

/**
 * Expression:
 * `argv - 1`
 * decrements pointer to arguments. And then we call `argv[argc]` because of "subscript operator":
 * https://stackoverflow.com/a/45970477/4009260
 */
int main(int argc, char **argv) {
    cout << argc[argv-1] << endl;

    return EXIT_SUCCESS;
}
