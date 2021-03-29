package org.itstep.firstboot.controllers;

import static org.springframework.transaction.annotation.Propagation.NEVER;

import java.util.List;
import org.itstep.firstboot.entities.StudentGroup;
import org.itstep.firstboot.services.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.DefaultTransactionDefinition;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/groups")
@Transactional(propagation = NEVER)
public class GroupController {

  @Autowired
  private GroupService groupService;

  @Autowired
  private PlatformTransactionManager transactionManager;

  @GetMapping("/")
  public ResponseEntity<List<StudentGroup>> getAll(){
    return ResponseEntity.ok(groupService.getAll());
  }

}
