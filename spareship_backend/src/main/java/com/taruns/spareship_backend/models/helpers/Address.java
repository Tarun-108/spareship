package com.taruns.spareship_backend.models.helpers;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Address {
    private String addressLine1;
    private String addressLine2;
    private String city;
    private String state;
    private int pinCode;
}
