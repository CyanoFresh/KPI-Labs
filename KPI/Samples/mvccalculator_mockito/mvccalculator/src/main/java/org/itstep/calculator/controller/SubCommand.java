package org.itstep.calculator.controller;

import org.itstep.calculator.controller.parser.TwoArgumentParser;
import org.itstep.calculator.model.CalculatorService;

public class SubCommand implements Command {

    private CalculatorService service = CalculatorService.getInstance();

    @Override
    public String execute(String command) {
        TwoArgumentParser parser = new TwoArgumentParser(command).parse();
        if(parser.hasError()) {
            return parser.getErrorMessage();
        }
        int first = parser.first();
        int second = parser.second();
        long result = service.sub(first, second);
        return "result = " + result;
    }
}
