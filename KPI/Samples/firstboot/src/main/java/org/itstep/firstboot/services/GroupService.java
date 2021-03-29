package org.itstep.firstboot.services;

import java.util.List;
import org.itstep.firstboot.entities.StudentGroup;
import org.itstep.firstboot.repositories.GroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GroupService {

  @Autowired
  private GroupRepository groupRepository;


  public List<StudentGroup> getAll() {
    List<StudentGroup> all = groupRepository.findStudentsWithGroups(); //.findAll();
    return all;
  }
}
