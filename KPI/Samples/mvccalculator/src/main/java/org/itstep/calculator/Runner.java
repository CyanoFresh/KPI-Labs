package org.itstep.calculator;

import org.itstep.calculator.controller.Controller;
import org.itstep.calculator.view.View;

public class Runner {
    public static void main(String[] args) {
        View view = new View();
        Controller controller = new Controller( System.in , view );
        controller.processUserInput();
    }
}
