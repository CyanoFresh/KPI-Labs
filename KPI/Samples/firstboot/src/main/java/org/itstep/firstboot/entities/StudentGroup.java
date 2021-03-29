package org.itstep.firstboot.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="student_group")
@Getter
@Setter
@ToString
public class StudentGroup {
  @Id
  @SequenceGenerator(name = "STUDENT_GROUP_ID_GENERATOR", sequenceName = "STUDENT_GROUP_ID_SEQ", initialValue = 1, allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "STUDENT_GROUP_ID_GENERATOR")
  private int id;

  private String name;


  @OneToMany(mappedBy = "group")

  List<Student> students = new ArrayList<>();

  public Student addStudent(Student newStudent){
      students.add(newStudent);
      newStudent.setGroup(this);
      return newStudent;
  }

  public void remove(Student student){
      students.remove(student);
      student.setGroup(null);
  }

}
