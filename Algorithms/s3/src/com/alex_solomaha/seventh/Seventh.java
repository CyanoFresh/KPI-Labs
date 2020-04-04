package com.alex_solomaha.seventh;

public class Seventh {
    public static void main(String[] args) {
        Node me = new Node("me");

        me.father = new Node("John");
        me.father.father = new Node("Clark");
        me.father.father.father = new Node("A");
        me.father.father.mother = new Node("B");
        me.father.mother = new Node("Jeniffer");
        me.father.mother.father = new Node("C");
        me.father.mother.mother = new Node("D");

        me.mother = new Node("Mary");
        me.mother.father = new Node("Sam");
        me.mother.father.father = new Node("E");
        me.mother.father.mother = new Node("F");
        me.mother.mother = new Node("Ann");
        me.mother.mother.father = new Node("G");
        me.mother.mother.mother = new Node("H");

        print(1, me);
    }

    private static void print(int generation, Node root) {
        if (root.father != null) {
            if (generation <= 0) {
                System.out.println(root.father);
            }

            print(--generation, root.father);
        }
        if (root.mother != null) {
            print(--generation, root.mother);
        }
    }
}

class Node {
    private String value;
    Node father;
    Node mother;

    Node(String value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return this.value;
    }
}