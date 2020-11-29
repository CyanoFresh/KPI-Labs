package Barbers2;

import java.util.concurrent.locks.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Queue;
import java.util.LinkedList;

public class BarberShop {
    public static final int NUM_CHAIRS = 3;
    public static final int NUM_WORKSPACES = 1;

    // Количетсво обслуженных клиентов
    private int customersCount;
    private int leftCustomersCount;

    // Количество свободных кресел
    //private int freeChairs;

    // Флаг состояния рабочего кресал парикмахера
    // true - Кресло пусто
    // false - Кресло занято клиентом
    private boolean workspaceEmptyFlag;

    // Парикмахер
    private Barber barberMan;

    // Места в приемной
    //private List<Customer> customerList;
    private Queue<Customer> customerList = new LinkedList<>();

    public BarberShop() {
        customersCount = 0;
        leftCustomersCount = 0;
        //freeChairs = NUM_CHAIRS;
        workspaceEmptyFlag = true;

        barberMan = new Barber();
    }

    public Queue<Customer> getCustomerList() {
        return customerList;
    }

    public Barber getBarber() {
        return barberMan;
    }

    // Занять место в приемной посетителем если есть свободные, возвращает true если удалось
    public synchronized void sitInWaitingRoom(Customer customer) {
        if (customerList.size() < NUM_CHAIRS) {
            customerList.add(customer);
            System.out.println(customer.getCustomerName() + " занял место в приемной\n");
            notify();
            try {
                wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        } else {
            leftCustomersCount++;
            System.out.println(customer.getCustomerName() + " ушел из парикмахерской, так как нет мест, количество необслужанных клиентов: " + leftCustomersCount + "\n");
            notify();
            try {
                wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

    }

    // Разбудить парикмахера и сесть на рабочее место если парикмахер спит
    public synchronized void sitInWorkspace(Customer customer) {
        System.out.println(customer.getCustomerName() + " разбудил парикмахера и сел на стрижку\n");
        barberMan.work(customer);
        notify();
        try {
            wait();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    // Проверка наличия посетителей со стороны парикмахера
    public synchronized boolean checkCustomers() {
        System.out.printf("Парикмахер проверяет наличие клиентов: В очереди %d из %d\n\n", customerList.size(), NUM_CHAIRS);
        return !customerList.isEmpty();
    }

    // Проверка состояния парикмахера со стороны клиента
    // 0 - sleep
    // 1 - work
    public synchronized int checkBarber(Customer customer) {
        System.out.print(customer.getCustomerName() + " проверяет состояние парикмахера:");

        if (barberMan.getStateFlag() == 0) {
            System.out.println(" парикмахер спит\n");
        } else {
            System.out.println(" парикмахер занят работой\n");
        }

        return barberMan.getStateFlag();
    }

    // Позвать клиента из очереди в приемной если есть, иначе спать, возвращает true если удалось
    public synchronized void callCustomer() {
        if (!customerList.isEmpty()) {
            barberMan.work(customerList.poll());
        } else {
            barberMan.sleep();
        }
    }

    public class Barber implements Runnable {
        // Время одной стрижки в мс
        public static final int WORK_TIME = 10000;

        // barber`s state flag
        // 0 - sleep
        // 1 - work
        // 2 - check
        int stateFlag;

        //enum barberState {SLEEP, WORK};

        public Barber() {
            stateFlag = 2;
        }

        @Override
        public void run() {
            while (true) {
                if ((stateFlag != 0) && (checkCustomers())) {
                    callCustomer();
                } else {
                    barberMan.sleep();
                }
            }
        }

        public int getStateFlag() {
            return stateFlag;
        }

        public boolean setStateFlag(int value) {
            if ((value == 0) || (value == 1)) {
                stateFlag = value;
                return true;
            }

            return false;
        }

        public synchronized void work(Customer customer) {
            stateFlag = 1;

            System.out.printf("Парикмахер стрижет посетителя: %s\n\n", customer.getCustomerName());
            try {
                Thread.sleep(WORK_TIME);
                //wait(WORK_TIME);
                System.out.printf("Парикмахер закончил стричь посетителя: %s\n\n", customer.getCustomerName());
                customersCount++;
                stateFlag = 2;
                notify();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        public synchronized void sleep() {
            if (stateFlag != 0) {
                stateFlag = 0;

                System.out.println("Парикмахер спит\n");
                try {
                    wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }

            notifyAll();
        }
    }
}