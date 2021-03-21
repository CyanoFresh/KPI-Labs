import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

public class MainControllerIT {
    @Test
    void mockInputAndModel() throws Throwable {
        var polygon = mock(Polygon.class);
        var view = mock(MainView.class);

        when(view.readInput()).thenReturn("1 2 3 4");
        when(polygon.calcS()).thenReturn(1.0);

        var controller = new MainController(polygon, view);
        controller.run();

        verify(polygon).setX(1);
        verify(polygon).setY(2);
        verify(polygon).setVertexCount(3);
        verify(polygon).setSide(4);
    }

    @Test
    void mockIncorrectInput() throws Throwable {
        var polygon = mock(Polygon.class);
        var view = mock(MainView.class);

        when(view.readInput()).thenReturn("1 2 3");

        var controller = new MainController(polygon, view);

        assertThrows(Exception.class, controller::run);
    }
}
