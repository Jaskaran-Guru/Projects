package model;

public class Doctor {
    private int doctorId;
    private String name;
    private String specialty;
    private String phone;

    // Constructor
    public Doctor(int doctorId, String name, String specialty, String phone) {
        this.doctorId = doctorId;
        this.name = name;
        this.specialty = specialty;
        this.phone = phone;
    }

    // Getters
    public int getDoctorId() {
        return doctorId;
    }

    public String getName() {
        return name;
    }

    public String getSpecialty() {
        return specialty;
    }

    public String getPhone() {
        return phone;
    }
}
