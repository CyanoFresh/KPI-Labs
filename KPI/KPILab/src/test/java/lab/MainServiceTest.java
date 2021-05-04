package lab;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class MainServiceTest {
    MainService mainService;

    @BeforeEach
    void setUp() {
        mainService = MainService.getInstance();
        mainService.setPolygon(new Polygon(1, 2, 4, 1));
    }

    @Test
    public void nameShouldBeReturned() {
        Assertions.assertEquals(mainService.getClassName(), "lab.Polygon");
    }

    @Test
    public void allFieldsShouldBePresent() {
        var fields = Arrays.asList("@java.lang.Deprecated(forRemoval=false, since=\"\") public java.lang.Integer x", "@java.lang.Deprecated(forRemoval=false, since=\"\") public java.lang.Integer y");

        Assertions.assertEquals(mainService.getFields(), fields);
    }

    @Test
    public void allMethodsShouldBePresent() {
        var methods = Arrays.asList("@lab.InvokeAnnotation() toString(toString)", "@lab.InvokeAnnotation() calcS(calcS)", "getSide(getSide)", "setSide(java.lang.Integer, setSide)", "setVertexCount(java.lang.Integer, setVertexCount)", "getVertexCount(getVertexCount)", "getX(getX)", "setX(java.lang.Integer, setX)", "getY(getY)", "setY(java.lang.Integer, setY)");

        Assertions.assertTrue(mainService.getMethods().containsAll(methods));
    }

    @Test
    public void allMethodsWithAnnotationShouldBeCalled() throws Throwable {
        var methods = Arrays.asList("toString", "calcS");

        Assertions.assertEquals(mainService.callWithAnnotation(), methods);
    }
}
