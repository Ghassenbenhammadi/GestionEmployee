package edu.polytech.gestionemployeebackend.controller;

import edu.polytech.gestionemployeebackend.exception.ResourceNotFoundException;
import edu.polytech.gestionemployeebackend.model.Departement;
import edu.polytech.gestionemployeebackend.model.Employee;
import edu.polytech.gestionemployeebackend.repository.DepartementRepository;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@AllArgsConstructor
@NoArgsConstructor
@Data
@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/")
public class DepartementController {
    @Autowired
 private DepartementRepository departementRepository;
    //get all departement
    @GetMapping("/departement")
    public List<Departement> getAllDepartement (){
        return departementRepository.findAll();
    }
    // Create departement Rest api
    @PostMapping("/departement")
    public Departement createDepartement(@RequestBody Departement departement){
        return departementRepository.save(departement);
    }
    //get departement by id rest api
    @GetMapping("/departement/{id}")
    public ResponseEntity<Departement> getDepartementById(@PathVariable Long id) {
        Departement departement = departementRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("departement not exist with id :" + id));
        return ResponseEntity.ok(departement);
    }
    // update departement rest api
    @PutMapping("/departement/{id}")
    public ResponseEntity<Departement> updateEmployee(@PathVariable Long id, @RequestBody Departement departementDetails) {
        Departement departement = departementRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(" Departement not exist with id :" + id));


        departement.setDepartement_Name(departementDetails.getDepartement_Name());


        Departement updatedDepartement = departementRepository.save(departement);
        return ResponseEntity.ok(updatedDepartement);
    }
    // delete departement rest api
    @DeleteMapping("/departement/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteDepartement(@PathVariable Long id){
        Departement departement = departementRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Departement not exist with id :" + id));

        departementRepository.delete(departement);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }



}
