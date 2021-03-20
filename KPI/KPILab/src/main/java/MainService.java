import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class MainService {
    protected Point point;
    protected Polygon polygon;
    protected Class<? extends Polygon> polygonClass;

    public MainService(Polygon polygon) {
        this.polygon = polygon;
        this.polygonClass = polygon.getClass();
    }

    public MainService(Point point, Polygon polygon) {
        this.point = point;
        this.polygon = polygon;
        this.polygonClass = polygon.getClass();
    }

    public String getClassName() {
        return polygonClass.getName();
    }

    public List<String> getFields() {
        return Arrays.stream(polygonClass.getFields()).map(field -> {
            String s = "";

            for (var annotation : field.getAnnotations()) {
                s += annotation + " ";
            }

            s += Modifier.toString(field.getModifiers()) + " ";
            s += field.getType().getName() + " " + field.getName();

            return s;
        }).collect(Collectors.toList());
    }

    public List<String> getMethods() {
        return Arrays.stream(polygonClass.getMethods()).map(method -> {
            String s = "";

            for (var annotation : method.getAnnotations()) {
                s += annotation + " ";
            }

            s += method.getName() + "(";

            for (var parameter : method.getParameters()) {
                s += (parameter.getType().getName() + ", ");
            }

            s += method.getName() + ")";

            return s;
        }).collect(Collectors.toList());
    }

    public List<String> callWithAnnotation() throws Throwable {
        var calledMethods = new ArrayList<String>();

        for (Method method : polygonClass.getMethods()) {
            if (method.isAnnotationPresent(InvokeAnnotation.class)) {
                System.out.println(method.getName() + "() = " + method.invoke(polygon));
                calledMethods.add(method.getName());
            }
        }

        return calledMethods;
    }
}
