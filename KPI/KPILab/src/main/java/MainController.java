import java.util.Scanner;

public class MainController {
    PolygonInterface polygon;
    MainView view;
    MainService service;
    CommandFactory commandFactory = CommandFactory.getInstance();

    public MainController(PolygonInterface polygon, MainView view, MainService mainService) {
        this.polygon = polygon;
        this.view = view;
        this.service = mainService;
    }

    public void run() {
        var in = new Scanner(System.in);

        while (true) {
            view.printPrompt();

            var userCommand = in.nextLine();
            Command command = commandFactory.getCommand(userCommand);
            String result = command.execute();

            view.printResult(result);
        }
    }
}
