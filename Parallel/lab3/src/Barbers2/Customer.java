package Barbers2;

public class Customer implements Runnable {
    private static int id = 1;
    private String customerName;
    private BarberShop barberShop;

    public Customer(BarberShop bShop, String name) {
        customerName = name + id;
        barberShop = bShop;
        id++;
    }

    public String getCustomerName() {
        return customerName;
    }

    public int check() {
        return barberShop.checkBarber(this);
    }

    @Override
    public void run() {
        if (check() == 0) {
            barberShop.sitInWorkspace(this);
        } else {
            barberShop.sitInWaitingRoom(this);
        }
    }
}