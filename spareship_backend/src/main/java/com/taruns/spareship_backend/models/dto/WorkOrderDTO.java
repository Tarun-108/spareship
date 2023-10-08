package com.taruns.spareship_backend.models.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class WorkOrderDTO {
    private String customerName;
    private String customerContact;
    private String description;
    private int productId;
    private int serviceCenterId;
    private List<Integer> sparePartsIds;
}
