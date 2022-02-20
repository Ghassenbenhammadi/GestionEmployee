package edu.polytech.gestionemployeebackend.model;

import com.sun.istack.NotNull;
import lombok.Data;
import net.bytebuddy.implementation.bind.annotation.Super;
import org.apache.tomcat.jni.Address;

import javax.persistence.*;

@Entity
@Data
@Table(name = "employees")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  long id;
    private String firstName;
    private String lastName;
    private String email;
    private String address;
    private double salaire;
    @ManyToOne
    private Departement department;
    public Employee(){
    }

    public Employee(long id, String firstName, String lastName, String email, String address, double salaire, Departement department) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
        this.salaire = salaire;
        this.department = department;
    }
}

