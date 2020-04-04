package com.alex_solomaha.sixth;

import java.util.Stack;

public class Sixth {
    public static void main(String[] args) {
        // Create stack
        Stack<Integer> stack = new Stack<>();
        for (int i = 0; i < 10; i++) {
            stack.push(i);
        }

        // calculate average:
        int sum = 0;
        int size = stack.size();
        for (int i = 0; i < size; i++) {
            sum += stack.pop();
        }
        System.out.println("Average is " + (sum / size));
    }
}
