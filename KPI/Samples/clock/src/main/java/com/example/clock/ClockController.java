package com.example.clock;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/clock")
public class ClockController {

  @Autowired
  ClockService clockService;

  @GetMapping("/")
  public List<Clock> getAll(){
    return clockService.findAll();
  }

}
