package controller;

import model.User;
import view.UserView;
import utils.FileHandler;

import java.util.ArrayList;
import java.util.HashMap;

public class UserController {
    private ArrayList<User> userList = new ArrayList<>();
    private HashMap<String, String> users = new HashMap<>();
    private UserView view = new UserView();

    public void register() {
        String username = view.getUserInput("Enter new username: ");
        FileHandler.writeInput("User entered username: " + username);

        String password = view.getUserInput("Enter new password: ");
        FileHandler.writeInput("User entered password: [HIDDEN]"); // do not log raw passwords


        for (User user : userList) {
            if (user.getUsername().equals(username)) {
                view.displayMessage("User already exists!");
                FileHandler.writeOutput("Registration failed - username already exists: " + username);
                return;
            }
        }

        // Register user
        userList.add(new User(username, password));
        view.displayMessage("Registration successful!");
        FileHandler.writeOutput("Registration successful for user: " + username);
    }

    public void login() {
        String username = view.getUserInput("Enter username: ");
        FileHandler.writeInput("Login attempt - username: " + username);

        String password = view.getUserInput("Enter password: ");
        FileHandler.writeInput("Login attempt - password: [HIDDEN]");

        for (User user : userList) {
            if (user.getUsername().equals(username) && user.getPassword().equals(password)) {
                view.displayMessage("Login successful!");
                FileHandler.writeOutput("Login successful for user: " + username);
                return;
            }
        }

        view.displayMessage("Invalid credentials!");
        FileHandler.writeOutput("Login failed for user: " + username);
    }
}
