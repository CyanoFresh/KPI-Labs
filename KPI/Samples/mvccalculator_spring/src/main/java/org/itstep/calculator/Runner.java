package org.itstep.calculator;

import org.itstep.calculator.controller.Controller;
import org.itstep.calculator.view.View;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Runner {
    public static void main(String[] args) {
        ApplicationContext ctx = new ClassPathXmlApplicationContext("context.xml");


        //View view = new View();
        //Controller controller = new Controller( System.in , view );
        Controller controller = ctx.getBean("controller" , Controller.class);
        controller.processUserInput();
        //TODO: you can replace all factories (CommandFactory & ParserFactory) with context
        // also you use scope prototype for TwoArgumentParser
    }
}
