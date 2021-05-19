package lab;

import org.springframework.stereotype.Component;

@Component
public class Point {
    @Deprecated
    public Integer x, y;

    public Point(Integer x, Integer y) {
        this.x = x;
        this.y = y;
    }

    public Point() { }

    public Integer getX() {
        return x;
    }

    public void setX(Integer x) {
        this.x = x;
    }

    public Integer getY() {
        return y;
    }

    public void setY(Integer y) {
        this.y = y;
    }

    public Double calcS() {
        return (double) 0;
    }

    @Override
    public String toString() {
        return "lab.Point{" + x + ", " + y + '}';
    }
}
