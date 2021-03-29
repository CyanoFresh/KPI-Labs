package org.itstep.calculator.controller;

import lombok.AllArgsConstructor;
import org.itstep.calculator.model.CalculatorService;
import org.itstep.calculator.view.View;

import java.util.Objects;

@AllArgsConstructor
public class SimpleController {
    private CalculatorService calculatorService;
    private View view;


    //add 3 4
    public void executeCommand(String command){
        Objects.requireNonNull(command);
        String tokens[] = command.split("\\s+");
        if( tokens.length < 1 ){
            view.printInputCorrectCommand();
        }
        switch (tokens[0]){
            case "add":
                if( tokens.length!=3){
                    view.printInputCorrectCommand();
                    break;
                }
                int first;
                int second;
                try{
                    first = Integer.parseInt(tokens[1]);
                    second = Integer.parseInt(tokens[2]);
                }catch (Exception ex){
                    view.printInputCorrectCommand();
                    break;
                }
                long result = calculatorService.add(first,second);
                view.printResult(""+result);
                break;
            default:
                view.printInputCorrectCommand();

        }
    }

    public static void main(String[] args) {
        View view = new View();
        CalculatorService calculatorService = new CalculatorService();
        SimpleController controller = new SimpleController(calculatorService, view);
        controller.executeCommand("add 3 4");


    }

}
