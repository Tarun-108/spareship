package com.taruns.spareship_backend.models.reqres.res;


import com.taruns.spareship_backend.models.entities.ServiceCenter;
import com.taruns.spareship_backend.models.entities.WareHouse;
import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class WareHouseAuthRes {
    private String token;
    private String message;
    private WareHouse wareHouse;
}
