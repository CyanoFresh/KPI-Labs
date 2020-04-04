package com.alex_solomaha.fifth;

import java.util.ArrayList;
import java.util.List;

public class Fifth {
    public static void main(String[] args) {
        int keyToRemove = 3;
        List<Integer> list = new ArrayList<>(List.of(3, 1, 2, 0, 0, 0, 44, 55, 123));
        System.out.println(list);

        int indexOf = list.indexOf(keyToRemove);
        if (indexOf != -1) {
            // Swap
            int tmpNext = list.get(indexOf + 1);
            list.set(indexOf + 1, list.get(indexOf + 2));
            list.set(indexOf + 2, tmpNext);
            // Remove
            list.remove(indexOf);
        }
        System.out.println(list);

        int countOfZeros = 0;

        for (int n : list) {
            if (n == 0) {
                countOfZeros++;

                if (countOfZeros == 3) {
                    System.out.println("Yes, there are 3 zeroes in list");
                    break;
                }
            } else {
                countOfZeros = 0;
            }
        }

        if (countOfZeros < 3) {
            System.out.println("No, there are less than 3 zeroes in list");
        }
    }
}
