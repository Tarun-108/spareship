package com.taruns.spareship_backend.models.entities.embaddables;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.*;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
@EqualsAndHashCode
@Embeddable
public class WorkOrderSparePartId implements Serializable {

    @Column(name = "work_order_id")
    private int workOrderId;

    @Column(name = "sku_id")
    private int skuId;


    // Getter and setter methods for the composite primary key fields


}
