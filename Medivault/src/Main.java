import controller.*;
import view.*;
import utils.*;


public class Main {
    public static void main(String[] args) {
        UserController userController = new UserController();
        PatientController patientController = new PatientController();
        AppointmentController appointmentController = new AppointmentController();
        DoctorController doctorController = new DoctorController();
        UserView view = new UserView();

        while (true) {
            String choice = view.getUserInput("\n1. Register\n2. Login\n3. Exit\nChoose an option: ");
            switch (choice) {
                case "1":
                    userController.register();
                    break;
                case "2":
                    userController.login();
                    boolean loggedIn = true;

                    while (loggedIn) {
                        String action = view.getUserInput(
                                "\n(1:Add Patient, 2:View Patients, 3:Add Appointment, 4:View Appointments,  5: Add Doctor, 6: View  Doctor, 7:Exit): "
                        );
                        switch (action) {
                            case "1":
                                patientController.addPatient();
                                break;
                            case "2":
                                patientController.viewPatients();
                                break;
                            case "3":
                                appointmentController.addAppointment();
                                break;
                            case "4":
                                appointmentController.viewAppointments();
                                break;
                            case "5":
                                doctorController.addDoctor();
                                break;
                            case "6":
                                doctorController.viewDoctors();
                                break;
                            case "7":
                                loggedIn = false;
                                break;
                            default:
                                view.displayMessage("Invalid choice.");
                        }
                    }
                    break;
                case "3":
                    view.displayMessage("Exiting system. Goodbye!");
                    return;
                default:
                    view.displayMessage("Invalid choice.");
            }
        }
    }
}
