package lab;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class PrintCommand implements Command {
    @Autowired
    CommandFactory commandFactory;

    @PostConstruct
    void init() {
        commandFactory.addCommand("print", this);
    }

    @Override
    public String execute() {
        var service = MainService.getInstance();
        var polygon = service.getPolygon();
        return polygon.toString();
    }
}
