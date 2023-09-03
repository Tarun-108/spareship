package com.taruns.spareship_backend.models.reqres.req;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class PlanningTeamLoginReq {
    private String email;
    private String password;
}