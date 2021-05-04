package lab;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {
    public static void main(String[] args) throws Throwable {
        ApplicationContext context
                = new ClassPathXmlApplicationContext("context.xml");

        var mainController = context.getBean(MainController.class);

        mainController.run();
    }
}
