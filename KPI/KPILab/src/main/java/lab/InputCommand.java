package lab;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class InputCommand implements Command {
    @Autowired
    CommandFactory commandFactory;

    @PostConstruct
    void init() {
        commandFactory.addCommand("input", this);
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
