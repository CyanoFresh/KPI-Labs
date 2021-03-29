package ua.kpi.demo;

import java.time.LocalDate;
import java.time.Month;
import java.util.Arrays;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class ExamService {
   public List<Exam> getExams(){
     List<Exam> exams = Arrays.asList( Exam.builder().
            date(LocalDate.of(2019, Month.JUNE,15))
            .subject("Components SE")
            .group("TV-61")
            .build(),
         Exam.builder().
              date(LocalDate.of(2019, Month.JUNE,16))
             .subject("Components SE")
             .group("TI-61")
             .build()
         );
     return exams;
   }
}
