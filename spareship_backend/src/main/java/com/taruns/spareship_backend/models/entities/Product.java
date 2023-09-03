package com.taruns.spareship_backend.models.entities;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;

@Getter
@Setter
@ToString
public class Product {
    private int skuId;
    private String name;
    private ArrayList<String> sparePartIds;
}
