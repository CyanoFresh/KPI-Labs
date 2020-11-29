package Barbers2;

public class Main {

    public static void main(String[] args) {
        BarberShop barberShopSim = new BarberShop();

        Thread barberThread = new Thread(barberShopSim.getBarber());
        barberThread.start();

        while (true) {
            Thread customerThread = new Thread(new Customer(barberShopSim, "Посетитель "));
            customerThread.start();


            try {
                Thread.sleep((int) (Math.random() * 1000));
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
