package org.itstep.firstboot.repositories;

import org.itstep.firstboot.entities.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student,Integer> {
    Student findByName(String name);
}
