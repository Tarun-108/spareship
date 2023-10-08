package com.taruns.spareship_backend.models.dto;

import com.taruns.spareship_backend.models.entities.SparePart;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductWithSparePartsDTO {
    private int productId;
    private String productName;
    private List<SparePart> spareParts;

}
