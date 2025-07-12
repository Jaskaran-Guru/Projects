package view;

import java.util.Scanner;

public class DoctorView {
    Scanner sc = new Scanner(System.in);

    // Method to get input from the user
    public String getInput(String prompt) {
        System.out.print(prompt);
        return sc.nextLine();
    }

    // Method to display a message to the user
    public void showMessage(String msg) {
        System.out.println(msg);
    }
}
