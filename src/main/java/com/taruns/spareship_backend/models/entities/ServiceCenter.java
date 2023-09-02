package com.taruns.spareship_backend.models.entities;

import com.taruns.spareship_backend.models.helpers.Address;
import com.taruns.spareship_backend.models.helpers.enums.Zone;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ServiceCenter {
    private String id;
    private String contact;
    private Address address;
    private String email;
    private String password;
    private Zone zone;
    private String inventory_id;
}


