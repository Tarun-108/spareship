package com.taruns.spareship_backend.models.entities;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;

@Getter
@Setter
@ToString
public class Inventory {
    private int id;
    @Getter
    @Setter
    @ToString
    private class ProductMapping {
        private int productId;
        private int availableQuantity;
    }
    @Getter
    @Setter
    @ToString
    private class SparePartMapping {
        private int sparePartId;
        private int availableQuantity;
    }
    private ArrayList<ProductMapping> productMappings;
    private ArrayList<SparePartMapping> sparePartMappings;
}
