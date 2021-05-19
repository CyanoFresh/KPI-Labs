package lab;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class PointTest {
    @Test
    public void SshouldBeZero() {
        var p = new Point(1, 2);

        Assertions.assertEquals(p.calcS(), 0);
    }

    @Test
    public void testToString() {
        var p = new Point(1, 2);

        Assertions.assertEquals(p.toString(), "lab.Point{"+p.getX()+", "+p.getY()+"}");
    }
}
