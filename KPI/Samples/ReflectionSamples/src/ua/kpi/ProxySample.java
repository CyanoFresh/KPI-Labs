package ua.kpi;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;
import java.util.function.Predicate;

interface SomeInterface{
    int getField();
    void setField(int val);
}

class SomeEntity implements SomeInterface{
    int field;

    @Override
    public int getField() {
        return field;
    }

    public void setField(int field) {
        this.field = field;
    }
}

class SomeProxy implements InvocationHandler{

    SomeInterface ref = new SomeEntity();

    public SomeProxy(SomeInterface ref) {
        this.ref = ref;
    }

    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        if( method.getName().startsWith("get") ){
            return method.invoke(ref, args);
        }
        throw new IllegalAccessException("Not allowed");
    }
}

public class ProxySample {
    public static void main(String[] args) throws Exception {
        Class clazz = Proxy.getProxyClass(ProxySample.class.getClassLoader(),
                Predicate.class);

        //Constructor constructor =clazz.getConstructor(SomeInterface.class );
        //SomeEntity entity = new SomeEntity();
        SomeInterface proxy = (SomeInterface) clazz.newInstance(); //(SomeInterface) constructor.newInstance(entity);

        System.out.println(proxy.getField());
        proxy.setField(5);

    }
}
