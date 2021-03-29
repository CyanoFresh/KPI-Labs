package org.itstep.calculator.controller;

import org.itstep.calculator.model.CalculatorService;

import java.util.HashMap;
import java.util.Map;

public class CommandFactory {
    private static CommandFactory instance = new CommandFactory();
    public static CommandFactory getInstance(){
        return instance;
    }

    private Map<String,Command> commands = new HashMap<>();

    private CommandFactory() {
        commands.put("add", new AddCommand( CalculatorService.getInstance() ) );
        commands.put("sub", new SubCommand());
        commands.put("div", new DivCommand());
    }

    public Command getCommand(String command){
        return commands.getOrDefault(command, command1 -> "Invalid command");
    }
}
