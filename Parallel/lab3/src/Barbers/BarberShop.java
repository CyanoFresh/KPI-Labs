package Barbers;

import java.util.Queue;
import java.util.LinkedList;

public class BarberShop {
    public static final int NUM_CHAIRS = 3;

    private int leftCustomersCount;
    private final Barber barber;
    private final Queue<Customer> customerList = new LinkedList<>();

    public BarberShop() {
        leftCustomersCount = 0;
        barber = new Barber();
    }

    public Barber getBarber() {
        return barber;
    }

    public synchronized void sitInWaitingRoom(Customer customer) throws InterruptedException {
        if (customerList.size() < NUM_CHAIRS) {
            customerList.add(customer);
            System.out.println(customer.getName() + " зайняв місце в приймальні");
        } else {
            leftCustomersCount++;
            System.out.println(customer.getName() + " пішов з перукарні, бо місць не було, кількість не обслугованих клієнтів: " + leftCustomersCount);
        }

        notify();
        wait();
    }

    // Разбудить парикмахера и сесть на рабочее место если парикмахер спит
    public synchronized void sitInWorkspace(Customer customer) throws InterruptedException {
        System.out.println(customer.getName() + " разбудив перукаря і стрежеться");
        barber.work(customer);
        notify();
        wait();
    }

    // Проверка наличия посетителей со стороны парикмахера
    public synchronized boolean checkCustomers() {
        System.out.printf("Перукар перевіряє чергу: %d из %d\n\n", customerList.size(), NUM_CHAIRS);
        return !customerList.isEmpty();
    }

    // Проверка состояния парикмахера со стороны клиента
    // 0 - sleep
    // 1 - work
    public synchronized int checkBarber(Customer customer) {
        System.out.print(customer.getName() + " перевіряє перукаря:");

        if (barber.getStateFlag() == 0) {
            System.out.println(" відпочиває");
        } else {
            System.out.println(" зайнятий");
        }

        return barber.getStateFlag();
    }

    // Позвать клиента из очереди в приемной если есть, иначе спать, возвращает true если удалось
    public synchronized void callCustomer() throws InterruptedException {
        if (!customerList.isEmpty()) {
            barber.work(customerList.poll());
        } else {
            barber.sleep();
        }
    }

    public class Barber implements Runnable {
        // Время одной стрижки в мс
        public static final int WORK_TIME = 5000;

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
                try {
                    if ((stateFlag != 0) && (checkCustomers())) {
                        callCustomer();
                    } else {
                        barber.sleep();
                    }
                } catch (Exception e) {
                    System.out.println(e.getMessage());
                }
            }
        }

        public int getStateFlag() {
            return stateFlag;
        }

        public synchronized void work(Customer customer) throws InterruptedException {
            stateFlag = 1;

            System.out.printf("Перукар стриже відвідувача: %s\n", customer.getName());

            Thread.sleep(WORK_TIME);
            System.out.printf("Перукар закінчив стригти відвідувача: %s\n", customer.getName());
            stateFlag = 2;
            notify();
        }

        public synchronized void sleep() {
            if (stateFlag != 0) {
                stateFlag = 0;

                System.out.println("Перукар спить\n");
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