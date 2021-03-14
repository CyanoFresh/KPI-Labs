import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class PointTest {
    @Test
    public void SshouldBeZero() {
        var p = new Point(1, 2);

        assertEquals(p.calcS(), 0);
    }

    @Test
    public void testToString() {
        var p = new Point(1, 2);

        assertEquals(p.toString(), "Point{"+p.getX()+", "+p.getY()+"}");
    }
}
