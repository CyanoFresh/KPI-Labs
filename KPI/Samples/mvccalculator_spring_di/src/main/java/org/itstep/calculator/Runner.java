package org.itstep.calculator;

import org.itstep.calculator.controller.Controller;
import org.itstep.calculator.view.View;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Runner {
    public static void main(String[] args) {

        ApplicationContext ctx = new ClassPathXmlApplicationContext("context.xml");
        //View view = ctx.getBean("view", View.class);

        Controller controller =  ctx.getBean("controller", Controller.class);//new Controller( System.in , view );
        controller.processUserInput();
    }
}
