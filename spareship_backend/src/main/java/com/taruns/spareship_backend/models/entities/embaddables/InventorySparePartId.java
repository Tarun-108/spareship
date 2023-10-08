package com.taruns.spareship_backend.models.entities.embaddables;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class InventorySparePartId implements Serializable {

    @Column(name = "inventory_id")
    private int inventoryId;

    @Column(name = "sku_id")
    private int skuId;


    // Getter and setter methods for the composite primary key fields

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        InventorySparePartId that = (InventorySparePartId) o;
        return inventoryId == that.inventoryId && skuId == that.skuId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(inventoryId, skuId);
    }
}
