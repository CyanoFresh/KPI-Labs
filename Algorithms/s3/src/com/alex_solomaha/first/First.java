package com.alex_solomaha.first;

import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.Scanner;
import java.util.Set;

public class First {
    public static void main(String[] args) {
//        Scanner in = new Scanner(System.in);
//        System.out.println("Enter sequence: ");
//        String src = in.nextLine();
        String src = "hello,my,name,is,hello.";

        src = src.substring(0, src.length() - 1);   // Remove dot from the end
        String[] words = src.split(",");    // Split string to words
        // Linked for order, Set for unique
        Set<String> list = new LinkedHashSet<String>(Arrays.asList(words));

        System.out.println(String.join(",", list) + ".");
    }
}
