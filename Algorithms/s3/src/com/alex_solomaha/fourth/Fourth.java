package com.alex_solomaha.fourth;

import java.util.ArrayList;
import java.util.Collections;

/**
 * Task:
 * Для заданого рядка, вивести голосні у прямому та приголосні у зворотному порядку.
 */
public class Fourth {
    public static void main(String[] args) {
        String consonants = "бгґджзклмнпрстфхцчшщ";
        String vowels = "аеиіоуяюєї";
        String src = "Привіт, світе, а";

        ArrayList<Character> srcConsonants = new ArrayList<>();
        ArrayList<Character> srcVowels = new ArrayList<>();

        for (int i = 0; i < src.length(); i++) {
            char ch = src.charAt(i);

            if (consonants.indexOf(ch) != -1) {
                srcConsonants.add(ch);
            } else if (vowels.indexOf(ch) != -1) {
                srcVowels.add(ch);
            }
        }

        Collections.sort(srcVowels);
        Collections.sort(srcConsonants);

        printIterative(srcVowels, false);
        printIterative(srcConsonants, true);

        Collections.sort(srcConsonants);

        printRecursive(srcVowels, false);
        printRecursive(srcConsonants, true);
    }

    private static void printIterative(ArrayList<Character> list, boolean desc) {
        if (desc) {
            list.sort(Collections.reverseOrder());
        }

        for (Character c : list) {
            System.out.print(c + ", ");
        }

        System.out.println();
    }

    private static void printRecursive(ArrayList<Character> list, boolean desc) {
        if (list.size() == 0) {
            System.out.println();
            return;
        }

        char c = desc ? list.remove(list.size() - 1) : list.remove(0);

        System.out.print(c + ", ");

        printRecursive(list, desc);
    }
}
