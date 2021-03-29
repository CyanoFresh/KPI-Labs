package org.itstep.calculator.controller;

import org.itstep.calculator.controller.parser.TwoArgumentParser;
import org.itstep.calculator.model.CalculatorService;

import java.util.Optional;

public class DivCommand implements Command{
    private CalculatorService service = CalculatorService.getInstance();

    @Override
    public String execute(String command) {
        TwoArgumentParser parser = new TwoArgumentParser(command).parse();
        if(parser.hasError()) {
            return parser.getErrorMessage();
        }
        int first = parser.first();
        int second = parser.second();
        Optional<Integer> result = service.div(first, second);

        result.ifPresent( val -> System.out.println(val) );

        return result.map( val -> "result = " + val  )
                     .orElse("result is not a number!");
                     //.orElseGet( () ->  "result is not a number!" );
                     //.orElseThrow( RuntimeException::new );
                             //() -> new RuntimeException(" /0 ") );
        /*
        if( result.isPresent() ) {
            return "result = " + result.get();
        }else{
            return "result is not a number!";
        }*/
    }
}
