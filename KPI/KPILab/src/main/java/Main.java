public class Main {
    public static void main(String[] args) throws Throwable {
        var mainView = new MainView();
        var polygon = (PolygonInterface) MyProxy.newProxyInstance(new Polygon());
        var service = MainService.getInstance();
        service.setPolygon(polygon);

        var mainController = new MainController(polygon, mainView, service);

        mainController.run();
    }
}
