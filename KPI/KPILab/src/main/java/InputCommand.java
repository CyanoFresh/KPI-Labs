public class InputCommand implements Command {
    public InputCommand(){
    }

    @Override
    public String execute() {
        var service = MainService.getInstance();
        var input = MainView.getInstance().readInput();
        var polygon = service.getPolygon();

        polygon.setX(input[0]);
        polygon.setY(input[1]);
        polygon.setVertexCount(input[2]);
        polygon.setSide(input[3]);

        return "fields set successfully";
    }

}
