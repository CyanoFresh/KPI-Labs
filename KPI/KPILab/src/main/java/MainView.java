import java.util.Scanner;

public class MainView {
    protected static MainView instance = new MainView();

    public static MainView getInstance() {
        return instance;
    }

    public int[] readInput() {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter fields in order: x y vertexCount side");

        return new int[]{in.nextInt(), in.nextInt(), in.nextInt(), in.nextInt()};
    }

    public void printPrompt() {
        System.out.println("Enter command [input, print]:");
    }

    public void printResult(String result) {
        System.out.println(result);
    }
}
