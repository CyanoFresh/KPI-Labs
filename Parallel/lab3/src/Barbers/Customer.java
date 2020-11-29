package Barbers;

public class Customer implements Runnable {
    private static int id = 1;
    private final String name;
    private final BarberShop barberShop;

    public Customer(BarberShop barberShop, String name) {
        this.name = name + id++;
        this.barberShop = barberShop;
    }

    public String getName() {
        return name;
    }

    @Override
    public void run() {
        try {
            if (barberShop.checkBarber(this) == 0) {
                barberShop.sitInWorkspace(this);
            } else {
                barberShop.sitInWaitingRoom(this);
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}