package com.taruns.spareship_backend.models.reqres.res;


import com.taruns.spareship_backend.models.entities.ServiceCenter;
import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class ServiceCenterAuthRes {
    private String token;
    private String message;
    private ServiceCenter serviceCenter;
}
