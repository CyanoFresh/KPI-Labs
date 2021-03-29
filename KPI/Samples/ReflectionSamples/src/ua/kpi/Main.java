package ua.kpi;

import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;

public class Main {

    public static void main(String[] args) throws Exception {
	// write your code here
        Student student =new Student("First" , 22, 185);

        Class clazz = student.getClass();
        System.out.println("====== methods========");
        for(Method method: clazz.getMethods()){
            System.out.println(Modifier.toString(method.getModifiers())+ " " +
                       method.getReturnType().getSimpleName()  +" "
                     + method.getName());
        }

        System.out.println("===== Interfaces=========");
        for(Class intefaze : clazz.getInterfaces()){
            System.out.println(intefaze.getName());
        }
        System.out.println("=====fields=========");
        for(Field field : clazz.getDeclaredFields()){
            System.out.println(field.getType().getSimpleName() + " "
                               + field.getName());
            if("rating".equals(field.getName())){
                field.setAccessible(true);
                Double rating = //field.getDouble(student);
                        (Double) clazz.getMethod("getRating").invoke( student );
                field.set(student, rating*2);
            }
        }

        System.out.println(student);

        for(Method method: clazz.getDeclaredMethods()) {
            if( method.isAnnotationPresent(CallMe.class) ){
                System.out.println("invocation of method "+method.getName());
                Object result = method.invoke(student);
                System.out.println("result " + result);
            }
        }
        System.out.println("======annotations=========");
        Method toString = clazz.getMethod("toString");
        for(Annotation annotation : toString.getAnnotations()){
            System.out.println(annotation.toString());

        }



    }
}
