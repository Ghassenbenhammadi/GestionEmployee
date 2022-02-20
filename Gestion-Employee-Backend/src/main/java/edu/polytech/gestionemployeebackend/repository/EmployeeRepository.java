package edu.polytech.gestionemployeebackend.repository;

import edu.polytech.gestionemployeebackend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface EmployeeRepository extends JpaRepository<Employee,Long>{
}
