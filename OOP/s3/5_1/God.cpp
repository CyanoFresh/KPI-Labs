#include <utility>
#include "God.h"

God::God(int height, string hairColor, string gender = string())
        : height(height),
          hairColor(std::move(hairColor)),
          gender(std::move(gender)) {}
