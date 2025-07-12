package utils;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class FileHandler {
    private static final String INPUT_FILE = "src/data/logsa.txt";
    private static final String OUTPUT_FILE = "src/data/logsb.txt";

    // Static block to ensure the directory exists
    static {
        File dir = new File("data");
        if (!dir.exists()) {
            dir.mkdirs(); // create the directory if it doesn't exist
        }
    }

    public static void writeInput(String input) {
        try (FileWriter fw = new FileWriter(INPUT_FILE, true)) {
            fw.write(input + "\n");
        } catch (IOException e) {
            System.out.println("Error writing input: " + e.getMessage());
        }
    }

    public static void writeOutput(String output) {
        try (FileWriter fw = new FileWriter(OUTPUT_FILE, true)) {
            fw.write(output + "\n");
        } catch (IOException e) {
            System.out.println("Error writing output: " + e.getMessage());
        }
    }

// Repeat for any other fields

}
