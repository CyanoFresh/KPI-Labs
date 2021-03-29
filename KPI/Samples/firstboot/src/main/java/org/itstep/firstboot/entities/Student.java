package org.itstep.firstboot.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

/**
 * Created by anastasiastepanova on 1/11/19.
 */
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@ToString(exclude = "group")
@Entity
@EqualsAndHashCode(of = {"name", "rate"})
public class Student {
    @Id
    @SequenceGenerator(name = "STUDENT_ID_GENERATOR", sequenceName = "STUDENT_ID_SEQ", initialValue = 1, allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "STUDENT_ID_GENERATOR")
    private int id;

    private String name;
    private double rate;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "group_id")
    private StudentGroup group;

}