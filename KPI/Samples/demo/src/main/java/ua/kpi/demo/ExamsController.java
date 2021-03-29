package ua.kpi.demo;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/exams")
public class ExamsController {

  @Autowired
  ExamService examService;

  @GetMapping("/")
  public List<Exam> getExams(){
    return examService.getExams();
  }

}
