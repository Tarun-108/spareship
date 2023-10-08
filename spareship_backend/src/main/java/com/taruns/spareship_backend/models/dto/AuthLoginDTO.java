package com.taruns.spareship_backend.models.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthLoginDTO {
    private String email;
    private String password;
    private String userType;
}
