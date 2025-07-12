package controller;

import java.util.*;

import model.Appointment;
import view.AppointmentView;
import utils.FileHandler;

public class AppointmentController {
    ArrayList<Appointment> appointments = new ArrayList<>();
    AppointmentView view = new AppointmentView();

    public void addAppointment() {
        String patient = view.getInput("Enter patient name: ");
        String doctor = view.getInput("Enter doctor name: ");
        String date = view.getInput("Enter appointment date (YYYY-MM-DD): ");

        FileHandler.writeInput("ADD_APPOINTMENT " + patient + " " + doctor + " " + date);

        Appointment a = new Appointment(patient, doctor, date);
        appointments.add(a);

        view.showMessage("Appointment added successfully!");
        FileHandler.writeOutput("Added Appointment: " + patient + " with " + doctor + " on " + date);
    }

    public void viewAppointments() {
        view.showMessage("List of Appointments:");
        for (Appointment a : appointments) {
            String info = a.getPatientName() + " | Doctor: " + a.getDoctorName() + " | Date: " + a.getDate();
            view.showMessage(info);
            FileHandler.writeOutput(info);
        }
    }
}
