package Barbers;

public class Main {

    public static void main(String[] args) throws InterruptedException {
        BarberShop barberShop = new BarberShop();

        Thread barberThread = new Thread(barberShop.getBarber());
        barberThread.start();

        while (true) {
            Thread customerThread = new Thread(new Customer(barberShop, "Відвідувач "));
            customerThread.start();

            var millis = (int) (Math.random() * 10000);
            Thread.sleep(millis);
        }
    }
}
