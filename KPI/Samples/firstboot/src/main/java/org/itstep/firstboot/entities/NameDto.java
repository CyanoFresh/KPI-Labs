package org.itstep.firstboot.entities;

import javax.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.lang.NonNull;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class NameDto {

    @NonNull
    @Pattern(regexp = "[a-zA-Z]+" , message = "Name should contain only letters")
    private String name;
}
