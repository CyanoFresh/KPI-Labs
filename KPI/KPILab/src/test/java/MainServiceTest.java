import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class MainServiceTest {
    MainService mainService;

    @BeforeEach
    void setUp() {
        mainService = new MainService(new Point(1, 2), new Polygon(1, 2, 4, 1));
    }

    @Test
    public void nameShouldBeReturned() {
        assertEquals(mainService.getClassName(), "Polygon");
    }

    @Test
    public void allFieldsShouldBePresent() {
        var fields = Arrays.asList("@java.lang.Deprecated(forRemoval=false, since=\"\") public java.lang.Integer x", "@java.lang.Deprecated(forRemoval=false, since=\"\") public java.lang.Integer y");

        assertEquals(mainService.getFields(), fields);
    }

    @Test
    public void allMethodsShouldBePresent() {
        var methods = Arrays.asList("@InvokeAnnotation() toString(toString)", "@InvokeAnnotation() calcS(calcS)", "getSide(getSide)", "setSide(java.lang.Integer, setSide)", "setVertexCount(java.lang.Integer, setVertexCount)", "getVertexCount(getVertexCount)", "getX(getX)", "setX(java.lang.Integer, setX)", "getY(getY)", "setY(java.lang.Integer, setY)");

        assertTrue(mainService.getMethods().containsAll(methods));
    }

    @Test
    public void allMethodsWithAnnotationShouldBeCalled() throws Throwable {
        var methods = Arrays.asList("toString", "calcS");

        assertEquals(mainService.callWithAnnotation(), methods);
    }
}
