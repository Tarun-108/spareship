package com.taruns.spareship_backend.models.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.taruns.spareship_backend.models.helpers.Address;
import com.taruns.spareship_backend.models.helpers.enums.Zone;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;

@Getter
@Setter
@ToString
public class WareHouse {
    private String id;
    private String contact;
    private Address address;
    private String email;

    @JsonIgnore
    private String password;
    private Zone zone;
    private String inventory_id;
    private ArrayList<String> workOrderIds;
}


