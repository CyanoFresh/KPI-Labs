package com.example.clock;

import java.util.Arrays;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class ClockService {

  public List<Clock> findAll() {
    return Arrays.asList( Clock.builder()
                              .id(1)
                              .model("first")
                              .description("first description")
                              .build(),
                          Clock.builder()
                              .id(2)
                              .model("second")
                              .description("desc")
                              .build());

  }
}
