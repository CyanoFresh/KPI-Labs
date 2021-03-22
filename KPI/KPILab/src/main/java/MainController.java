public class MainController {
    Polygon polygon;
    MainView mainView;

    public MainController(Polygon polygon, MainView mainView) {
        this.polygon = polygon;
        this.mainView = mainView;
    }

    public void run() throws Throwable {
        var service = new MainService(polygon);
        var input = mainView.readInput();

        polygon.setX(input[0]);
        polygon.setY(input[1]);
        polygon.setVertexCount(input[2]);
        polygon.setSide(input[3]);

        mainView.print(polygon, service);
    }
}
