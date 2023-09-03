package com.taruns.spareship_backend.models.reqres.req;


import com.taruns.spareship_backend.models.helpers.enums.Zone;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class WareHouseRegisterReq {
    private String name;
    private String contact;
    private String addressLine;
    private String city;
    private String state;
    private String postalCode;
    private Zone zone;
    private String email;
    private String password;
}
