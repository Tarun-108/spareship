package com.taruns.spareship_backend.models.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SparePartDTO {
    private int skuId;
    private String category;
    private String description;
    private int quantity;  // New field for quantity

    // Constructors, getters, and setters
}
