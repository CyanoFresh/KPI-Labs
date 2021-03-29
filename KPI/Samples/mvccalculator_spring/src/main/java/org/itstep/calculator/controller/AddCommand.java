package org.itstep.calculator.controller;

import org.itstep.calculator.controller.parser.ParserFactory;
import org.itstep.calculator.controller.parser.TwoArgumentParser;
import org.itstep.calculator.model.CalculatorService;

public class AddCommand implements Command {

    private CalculatorService calculatorService;

    private ParserFactory parserFactory = ParserFactory.getInstance();

    public AddCommand(CalculatorService calculatorService) {
        this.calculatorService = calculatorService;
    }

    @Override
    public String execute(String arguments) {
        TwoArgumentParser parser = parserFactory
                .twoArgumentParser(arguments)
                .parse();
        if(parser.hasError() ){
            return parser.getErrorMessage();
        }
        long result = calculatorService.add( parser.first(), parser.second());
        return "result = " + result;
    }

}
