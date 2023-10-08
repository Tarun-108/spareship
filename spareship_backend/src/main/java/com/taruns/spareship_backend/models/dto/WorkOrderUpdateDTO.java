package com.taruns.spareship_backend.models.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WorkOrderUpdateDTO {
    private int serviceCenterId;
    private int workOrderId;
    List<Integer> skuIds;
}
