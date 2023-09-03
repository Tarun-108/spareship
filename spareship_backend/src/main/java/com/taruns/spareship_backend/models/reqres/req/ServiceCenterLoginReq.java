package com.taruns.spareship_backend.models.reqres.req;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
public class ServiceCenterLoginReq{
    private String email;
    private String password;
}
