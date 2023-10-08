package com.taruns.spareship_backend.models.helpers;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class CustomerSupport {
    private String email;

    @JsonIgnore
    private String password;
}
