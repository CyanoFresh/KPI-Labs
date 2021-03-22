import java.util.Scanner;

public class MainView {
    public void print(Polygon polygon, MainService service) throws Throwable {
        System.out.println(polygon);

        System.out.println("Ім'я класу: " + service.getClassName());
        System.out.println("Поля:\n" + service.getFields());

        System.out.println("Методи:\n" + service.getMethods());

        System.out.println("Викликаємо методи з анотацією:\n" + service.callWithAnnotation());

        var proxy = (PolygonInterface) MyProxy.newProxyInstance(polygon);
        System.out.println("\nProxy getSide(): " + proxy.getSide());
        proxy.setSide(5);
    }

    public int[] readInput() {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter fields in order: x y vertexCount side");

        return new int[]{in.nextInt(), in.nextInt(), in.nextInt(), in.nextInt()};
    }
}
