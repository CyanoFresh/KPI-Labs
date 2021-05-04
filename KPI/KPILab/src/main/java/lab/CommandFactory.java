package lab;

import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class CommandFactory {
    protected static CommandFactory instance = new CommandFactory();

    public static CommandFactory getInstance() {
        return instance;
    }

    protected Map<String, Command> commands = new HashMap<>();

//    protected CommandFactory() {
//        commands.put("input", new InputCommand());
//        commands.put("print", new PrintCommand());
//    }

    public void addCommand(String name, Command command) {
        commands.put(name, command);
    }

    public Command getCommand(String command) {
        return commands.getOrDefault(command, () -> "Invalid command");
    }
}
