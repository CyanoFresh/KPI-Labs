package ua.kpi;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Properties;

public class ReflectionStudentRunner {

  public static void main(String[] args) throws Exception {
    Properties props = new Properties();
    props.load(ReflectionStudentRunner.class.getResourceAsStream("/config.properties"));

    String className = props.getProperty("class");
    Class clazz = Class.forName(className);


    //Class clazz = Student.class;
    Field idField = clazz.getDeclaredField("id");
    idField.setAccessible(true);
    Constructor constructor = clazz.getConstructor(String.class, int.class, double.class);


    Object student = constructor.newInstance("Name", 100, 12.);
    //Student student = new Student("Name", 100, 12.);
    Object nameValue = idField.get(student);
    System.out.println(nameValue);
    idField.set(student, 200);
    System.out.println(student);
    Method[] methods = clazz.getMethods();
    for(Method method : methods){
      System.out.println(method.getReturnType() +" " +method.getName());
      if(method.getName().startsWith("get")){
        Object result = method.invoke(student);
        System.out.println("====" + result);
      }
    }



  }

}
