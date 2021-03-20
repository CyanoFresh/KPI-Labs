public class Main {
    public static void main(String[] args) throws Throwable {
        var mainView = new MainView();
        var polygon = new Polygon();
        var mainController = new MainController(polygon, mainView);

        mainController.run();
    }
}
