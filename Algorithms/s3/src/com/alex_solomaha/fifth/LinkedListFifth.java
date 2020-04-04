package com.alex_solomaha.fifth;

import java.util.LinkedList;

public class LinkedListFifth {
    public static void main(String[] args) {
        int keyToRemove = 3;

        LinkedList<Integer> list = new LinkedList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(0);
        list.add(0);
        list.add(0);
        list.add(100);
        System.out.println(list);

        list.remove((Integer) keyToRemove);

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
