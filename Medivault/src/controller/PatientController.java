package controller;

import java.util.ArrayList;

import model.Patient;
import view.PatientView;
import utils.FileHandler;

import java.util.*;

public class PatientController {

    ArrayList<Patient> patients = new ArrayList<>();
    PatientView view = new PatientView();
    private HashSet<String> patientNames = new HashSet<>();

    public void addPatient() {
        String name = view.getInput("Enter patient name: ");
        int age = Integer.parseInt(view.getInput("Enter age: "));
        String disease = view.getInput("Enter disease: ");

        FileHandler.writeInput("ADD_PATIENT " + name + " " + age + " " + disease);

        Patient p = new Patient(name, age, disease);
        patients.add(p);

        view.showMessage("Patient added successfully!");
        FileHandler.writeOutput("Added Patient: " + name);
    }

    public void viewPatients() {
        view.showMessage("List of Patients:");
        for (Patient p : patients) {
            String info = p.getName() + " | Age: " + p.getAge() + " | Disease: " + p.getDisease();
            view.showMessage(info);
            FileHandler.writeOutput(info);
        }
    }



}
