package view;

import java.util.Scanner;

public class PatientView {
    Scanner sc = new Scanner(System.in);

    public String getInput(String prompt) {
        System.out.print(prompt);
        return sc.nextLine();
    }

    public void showMessage(String msg) {
        System.out.println(msg);
    }
}
