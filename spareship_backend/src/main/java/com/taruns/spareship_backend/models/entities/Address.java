package com.taruns.spareship_backend.models.entities;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Address {
    private String addressLine;
    private String city;
    private String state;
    private int pinCode;
}
