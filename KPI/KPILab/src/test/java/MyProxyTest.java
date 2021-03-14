import org.junit.jupiter.api.Test;

import java.lang.reflect.UndeclaredThrowableException;

import static org.junit.jupiter.api.Assertions.*;

public class MyProxyTest {
    @Test
    public void setterShouldFail() {
        var polygon = new Polygon(1, 0, 3, 4);
        var proxy = (PolygonInterface) MyProxy.newProxyInstance(polygon);

        Throwable exception = assertThrows(UndeclaredThrowableException.class, () -> proxy.setSide(2));
        assertTrue(exception.getCause() instanceof IllegalAccessException);
    }

    @Test
    public void gettersAreAllowed() {
        var polygon = new Polygon(1, 0, 3, 4);
        var proxy = (PolygonInterface) MyProxy.newProxyInstance(polygon);

        assertEquals(proxy.getSide(), 4);
    }
}
