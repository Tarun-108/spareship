package com.taruns.spareship_backend.models.entities;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;

@Getter
@Setter
@ToString
public class SparePart {
    private String sku;
    private String category;
    private String description;
    private int price;
    private ArrayList<String> compatibleDevicesId;
}