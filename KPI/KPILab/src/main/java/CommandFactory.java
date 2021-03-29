import java.util.HashMap;
import java.util.Map;

public class CommandFactory {
    protected static CommandFactory instance = new CommandFactory();

    public static CommandFactory getInstance() {
        return instance;
    }

    protected Map<String, Command> commands = new HashMap<>();

    protected CommandFactory() {
        commands.put("input", new InputCommand());
        commands.put("print", new PrintCommand());
    }

    public Command getCommand(String command) {
        return commands.getOrDefault(command, () -> "Invalid command");
    }
}
