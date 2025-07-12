package controller;

import model.Doctor;
import view.DoctorView;
import utils.FileHandler;

import java.util.*;

public class DoctorController {

    // List to store doctors
    private ArrayList<Doctor> doctors = new ArrayList<>();
    private DoctorView view = new DoctorView();
    private HashSet<String> doctorNames = new HashSet<>();

    // Method to add a doctor
    public void addDoctor() {
        String name = view.getInput("Enter doctor name: ");
        String specialty = view.getInput("Enter specialty: ");
        String phone = view.getInput("Enter phone number: ");


        // Write the input data to the log file
        FileHandler.writeInput("ADD_DOCTOR " + name + " " + specialty + " " + phone );

        // Create a new doctor object
        Doctor doctor = new Doctor(doctors.size() + 1, name, specialty, phone);

        // Add doctor to the list and track names to avoid duplicates
        if (!doctorNames.contains(name)) {
            doctors.add(doctor);
            doctorNames.add(name);
            view.showMessage("Doctor added successfully!");
            FileHandler.writeOutput("Added Doctor: " + name);
        } else {
            view.showMessage("Doctor with this name already exists.");
        }
    }

    // Method to view all doctors
    public void viewDoctors() {
        if (doctors.isEmpty()) {
            view.showMessage("No doctors available.");
        } else {
            view.showMessage("List of Doctors:");
            for (Doctor doctor : doctors) {
                String info = doctor.getName() + " | Specialty: " + doctor.getSpecialty() + " | Phone: " + doctor.getPhone() ;
                view.showMessage(info);
                FileHandler.writeOutput(info);
            }
        }
    }
}
