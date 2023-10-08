package com.taruns.spareship_backend.models.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "inventory")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Inventory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "inventory_id")
    private int inventoryId;


    @OneToOne(mappedBy = "inventory")
    @JsonIgnore
    private ServiceCenter serviceCenter;


    @OneToOne(mappedBy = "inventory")
    @JsonIgnore
    private WareHouse wareHouse;


    @OneToMany(mappedBy = "inventory")
    @JsonIgnore
    private List<InventorySparePart> inventorySpareParts;

    @ManyToMany
    @JoinTable(
            name = "inventory_spare_part",
            joinColumns = @JoinColumn(name = "inventory_id"),
            inverseJoinColumns = @JoinColumn(name = "sku_id")
    )
    @JsonIgnore
    private List<SparePart> spareParts = new ArrayList<>();

    public int getQuantityForSparePart(SparePart sparePart) {
        for (InventorySparePart inventorySparePart : inventorySpareParts) {
            if (inventorySparePart.getSparePart().equals(sparePart)) {
                return inventorySparePart.getQuantity();
            }
        }
        return 0; // Return zero if spare part not found in inventory
    }

}
