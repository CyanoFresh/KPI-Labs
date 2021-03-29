package ua.kpi;

import java.io.Serializable;


public class Student implements Serializable, Cloneable {
    private String name;
    private int id;
    private double rating;

    public Student(String name, int id, double rating) {
        this.name = name;
        this.id = id;
        this.rating = rating;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    @Override
    @CallMe
    public String toString() {
        return "Student{" +
                "name='" + name + '\'' +
                ", id=" + id +
                ", rating=" + rating +
                '}';
    }
}
