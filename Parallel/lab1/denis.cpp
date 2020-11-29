#include <iostream>
#include <vector>
#include <thread>
#include <algorithm>
#include <iomanip>
#include <functional>
#include <chrono>
#include <random>
#include <numeric>


using time_val = std::chrono::microseconds;
const std::string time_val_str{"microseconds"};

constexpr int MAX_ITEM_VAL = 100000;
constexpr int ELEM_COUNT = 1000;
constexpr int JOBS_COUNT = 5;

template<class ForwardIt>
void CalculateVectorScalar(ForwardIt itA, ForwardIt endA,
                           ForwardIt itB, ForwardIt endB,
                           typename ForwardIt::value_type &result) {
    if (endA - itA != endB - itB) {
        throw std::invalid_argument("parts must be equal");
    }

    for (; itA != endA; itA++, itB++) {
        result += *itA * *itB;
    }
}

template<class T, class ChronoTimeType>
std::pair<T, ChronoTimeType> MeasureTime(const std::function<T()> &f) {
    auto t1 = std::chrono::high_resolution_clock::now();
    T res = f();
    auto t2 = std::chrono::high_resolution_clock::now();

    return std::make_pair(std::move(res), std::chrono::duration_cast<ChronoTimeType>(t2 - t1));
}

float get_random() {
    static std::default_random_engine e;
    static std::uniform_real_distribution<> dis(0, MAX_ITEM_VAL); // rage 0 - MAX_ITEM_VAL
    return dis(e);
}

int main() {

    // generating random vectors
    std::vector<double> vectA(ELEM_COUNT);
    std::vector<double> vectB(ELEM_COUNT);

    std::generate_n(vectA.begin(), ELEM_COUNT, get_random);
    std::generate_n(vectB.begin(), ELEM_COUNT, get_random);

    {
        std::thread([]() {}).join();
    }

    // Single thread

    auto serialResult = MeasureTime<double, time_val>(
            [&vectA, &vectB]() {
                double res = 0;
                /*std::thread t( CalculateVectorScalar<std::vector<double>::iterator>,
                               vectA.begin(), vectA.end(),
                               vectB.begin(), vectB.end(),
                               std::ref( res ) );
                t.join();*/
                CalculateVectorScalar<std::vector<double>::iterator>(
                        vectA.begin(), vectA.end(),
                        vectB.begin(), vectB.end(),
                        std::ref(res));


                return res;
            });


    std::cout << "SINGLE THREAD: " << std::fixed << std::setprecision(5) << serialResult.first << std::endl;
    std::cout << "Time taken: " << serialResult.second.count() << " " << time_val_str << std::endl;


    // Multithread variant


    auto multithreadResult = MeasureTime<double, time_val>(
            [&vectA, &vectB]() {

                std::vector<std::thread> threads;
                threads.reserve(JOBS_COUNT);
                std::vector<double> jobs_result(JOBS_COUNT);

                for (int i = 0; i < JOBS_COUNT; i++) {
                    int offset_start = i * (ELEM_COUNT / JOBS_COUNT);
                    int offset_end = (i + 1) * (ELEM_COUNT / JOBS_COUNT);
                    threads.emplace_back(
                            CalculateVectorScalar<std::vector<double>::iterator>,
                            vectA.begin() + offset_start,
                            i == JOBS_COUNT - 1 ? vectA.end() : vectA.begin() + offset_end,
                            vectB.begin() + offset_start,
                            i == JOBS_COUNT - 1 ? vectB.end() : vectB.begin() + offset_end,
                            std::ref(jobs_result[i])
                    );
                }

                std::for_each(threads.begin(), threads.end(),
                              [](std::thread &t) {
                                  t.join();
                              });


                return std::accumulate(jobs_result.begin(), jobs_result.end(), double{0});
            }
    );


    std::cout << "MULTITHREAD (" << JOBS_COUNT << " threads): " << std::fixed << std::setprecision(5)
              << multithreadResult.first << std::endl;
    std::cout << "Time taken: " << multithreadResult.second.count() << " " << time_val_str << std::endl;

    double speedup = ((double) serialResult.second.count()) / multithreadResult.second.count();
    std::cout << std::endl << "Speedup factor: " << speedup << std::endl;
    std::cout << "Efficiency ratio: " << speedup / JOBS_COUNT << std::endl << std::endl;


    return 0;
}