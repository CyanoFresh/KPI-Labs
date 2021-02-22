import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;

public class Main {
    public static void main(String[] args) throws InvocationTargetException, IllegalAccessException {
        var p = new Point(1, 0);
        System.out.println(p);
        var polygon = new Polygon(1, 0, 3, 4);
        System.out.println(polygon);

        var c = polygon.getClass();
        System.out.println("Ім'я класу: " + c.getName());
        System.out.println("Поля:\n");

        for (var field : c.getFields()) {
            for (var annotation : field.getAnnotations()) {
                System.out.println(annotation);
            }

            System.out.print(Modifier.toString(field.getModifiers()));

            System.out.println(field.getType().getName() + " " + field.getName());

            System.out.println();
        }

        System.out.println("Методи:\n");
        for (var method : c.getMethods()) {
            for (var annotation : method.getDeclaredAnnotations()) {
                System.out.println(annotation);
            }

            System.out.print(method.getName() + "(");

            for (var parameter : method.getParameters()) {
                System.out.print(parameter.getType().getName() + ", ");
            }

            System.out.println(")\n");
        }

        System.out.println("Викликаємо методи з анотацією:\n");
        for (Method method : c.getMethods()) {
            if (method.isAnnotationPresent(InvokeAnnotation.class)) {
                System.out.println(method.getName() + "() = " + method.invoke(polygon));
            }
        }

        var proxy = (PolygonInterface) MyProxy
                .newProxyInstance(polygon);
        System.out.println("\nProxy getSide(): " + proxy.getSide());
        proxy.setSide(5);

    }
}
