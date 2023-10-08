package com.taruns.spareship_backend.models.entities;


import com.taruns.spareship_backend.models.entities.embaddables.InventorySparePartId;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "inventory_spare_part")
public class InventorySparePart {

    @EmbeddedId
    private InventorySparePartId id;

    @ManyToOne
    @JoinColumn(name = "sku_id", insertable=false, updatable=false)
    private SparePart sparePart;

    @Column(name = "quantity", nullable = false, columnDefinition = "INT DEFAULT 0")
    private int quantity;

    @ManyToOne
    @JoinColumn(name = "inventory_id", insertable=false, updatable=false)
    private Inventory inventory;

}
