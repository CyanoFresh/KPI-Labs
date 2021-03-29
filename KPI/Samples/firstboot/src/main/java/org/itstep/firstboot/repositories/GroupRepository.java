package org.itstep.firstboot.repositories;

import java.util.List;
import org.itstep.firstboot.entities.StudentGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface GroupRepository extends JpaRepository<StudentGroup,Integer> {

  @Query(value = "SELECT DISTINCT gr FROM StudentGroup gr LEFT JOIN FETCH gr.students s")
  List<StudentGroup>  findStudentsWithGroups();

}
