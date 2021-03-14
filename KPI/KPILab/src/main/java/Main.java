
public class Main {
    static Point p = new Point(1, 0);
    static Polygon polygon = new Polygon(1, 0, 3, 4);

    public static void main(String[] args) throws Throwable {
        System.out.println(p);
        System.out.println(polygon);

        var service = new MainService(p, polygon);

        System.out.println("Ім'я класу: " + service.getClassName());
        System.out.println("Поля:\n" + service.getFields());

        System.out.println("Методи:\n" + service.getMethods());

        System.out.println("Викликаємо методи з анотацією:\n");
        System.out.println(service.callWithAnnotation());

        var proxy = (PolygonInterface) MyProxy
                .newProxyInstance(polygon);
        System.out.println("\nProxy getSide(): " + proxy.getSide());
        proxy.setSide(5);
    }
}
