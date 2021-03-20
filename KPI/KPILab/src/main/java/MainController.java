public class MainController {
    Polygon polygon;
    MainView mainView;

    public MainController(Polygon polygon, MainView mainView) {
        this.polygon = polygon;
        this.mainView = mainView;
    }

    public void run() throws Throwable {
        var input = mainView.readInput();
        var parts = input.split("\\s+");

        if (parts.length != 4) {
            throw new Exception("You should input 4 numbers divided by space!");
        }

        polygon.setX(Integer.parseInt(parts[0]));
        polygon.setY(Integer.parseInt(parts[1]));
        polygon.setVertexCount(Integer.parseInt(parts[2]));
        polygon.setSide(Integer.parseInt(parts[3]));

        var service = new MainService(polygon);

        mainView.print(polygon, service);
    }
}
