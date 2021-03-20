import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class PolygonTest {
    @Test
    public void SshouldBeRight() {
        var p = new Polygon(0, 0,4,1);
        var p2 = new Polygon(0, 0,-4,1);

        assertEquals(Math.round(p.calcS()), 1);
        assertEquals(Math.round(p2.calcS()), 1);
    }

    @Test
    public void toStringShouldBeComposedCorrectly() {
        var p = new Polygon(0, 0,4,1);

        assertEquals(p.toString(), "Polygon{" +
                "vertexCount=" + p.getVertexCount() +
                ", side=" + p.getSide() +
                ", S=" + p.calcS() +
                '}');
    }
}
