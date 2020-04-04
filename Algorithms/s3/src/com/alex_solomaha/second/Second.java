package com.alex_solomaha.second;

import java.util.ArrayList;
import java.util.Collections;

public class Second {
    public static void main(String[] args) {
        String src = "Вивести в алфавітному порядку для даного тексту приголосні літери, які входять у кожне друге слово.";

        String consonants = "бгґджзклмнпрстфхцчшщ";

        String[] words = src.split("(?U)\\W+");
        ArrayList<Character> unsortedLetters = new ArrayList<>();

        for (int i = 0; i < words.length; i += 2) {
            String word = words[i];

            for (int j = 0; j < word.length(); j++) {
                char c = word.charAt(j);

                if (consonants.indexOf(c) != -1) {
                    unsortedLetters.add(c);
                }
            }
        }

        Collections.sort(unsortedLetters);

        System.out.println(unsortedLetters);
    }
}
