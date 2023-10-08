package com.taruns.spareship_backend.models.dto;


import com.taruns.spareship_backend.models.helpers.enums.Zone;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WareHouseForDispatchDTO {
    private int warehouseId;
    private String email;
    private String addressStr;
    private Zone zone;
}
