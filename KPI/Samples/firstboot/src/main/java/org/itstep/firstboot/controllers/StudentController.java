package org.itstep.firstboot.controllers;

import javax.validation.Valid;
import org.itstep.firstboot.entities.NameDto;
import org.itstep.firstboot.entities.Student;
import org.itstep.firstboot.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.util.MimeTypeUtils.APPLICATION_JSON;
import static org.springframework.util.MimeTypeUtils.APPLICATION_JSON_VALUE;

@CrossOrigin
@RestController
@RequestMapping("/api/students")
public class StudentController {
    @Autowired
    StudentService studentService;

    //@RequestMapping ("/")
    //public ResponseEntity<List<Student>> getAllStudents(){
    //    List<Student> all = studentService.getAll();
    //    return ResponseEntity.ok(all);
    //}
    @GetMapping("/")
    List<Student> getAll(){
        return studentService.getAll();
    }

    @PostMapping(value = "/find")
    public ResponseEntity findByName( @RequestBody  @Valid NameDto nameDto) {
        return studentService.findByName(nameDto.getName())
            .map(student -> ResponseEntity.ok(student))
            .orElse(ResponseEntity.notFound().build());

    }

    @RequestMapping(value = "/find/{name}", method = RequestMethod.GET)
    public ResponseEntity findByName(@PathVariable("name") String name) {
        return studentService.findByName(name)
                             .map(student -> ResponseEntity.ok(student))
                             .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping (value = "/", consumes = APPLICATION_JSON_VALUE , produces = APPLICATION_JSON_VALUE)
    public ResponseEntity createStudent(@RequestBody Student newStudent){
        if (newStudent.getId() != 0){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(studentService.create(newStudent));
    }

    @GetMapping (value = "/{id}")
    public ResponseEntity findById (@PathVariable("id") int id) {
        return studentService.getStudentById(id).map(student -> ResponseEntity.ok(student))
                                                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping (value = "/{id}", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity changeName (@PathVariable("id") int id, @RequestBody Student student){
        if (id != student.getId()){
            return ResponseEntity.badRequest().build();
        }
        if(studentService.updateStudent( student)){
            return ResponseEntity.ok(student);
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity delete(@PathVariable("id") int id) {
        if(studentService.deleteStudent(id))
            return ResponseEntity.ok().build();
        return ResponseEntity.notFound().build();
    }

}
