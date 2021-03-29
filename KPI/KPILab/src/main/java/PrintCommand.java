public class PrintCommand implements Command {
    public PrintCommand(){
    }

    @Override
    public String execute() {
        var service = MainService.getInstance();
        var polygon = service.getPolygon();
        return polygon.toString();
    }

}
