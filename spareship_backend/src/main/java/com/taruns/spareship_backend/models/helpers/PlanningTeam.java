package com.taruns.spareship_backend.models.helpers;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class PlanningTeam {
    private String email;
    @JsonIgnore
    private String password;
}
