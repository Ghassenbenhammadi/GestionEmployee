package edu.polytech.gestionemployeebackend.repository;

import edu.polytech.gestionemployeebackend.model.Departement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartementRepository extends JpaRepository<Departement,Long> {
}
