package com.taruns.spareship_backend.models.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.taruns.spareship_backend.models.entities.embaddables.WorkOrderSparePartId;
import com.taruns.spareship_backend.models.helpers.enums.RequirementStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "work_order_spare_part")
public class WorkOrderSparePart {

    @EmbeddedId
    @JsonIgnore
    private WorkOrderSparePartId id;

    @ManyToOne
    @JoinColumn(name = "work_order_id", referencedColumnName = "work_order_id", insertable = false, updatable = false, nullable = false)
    @JsonIgnore
    private WorkOrder workOrder;

    @ManyToOne
    @JoinColumn(name = "sku_id", referencedColumnName = "sku_id", insertable = false, updatable = false, nullable = false)
    private SparePart sparePart;

    @Transient
    private boolean available;

    @Enumerated(EnumType.STRING)
    @Column(name = "requirement_status", nullable = false)
    private RequirementStatus requirementStatus = RequirementStatus.REQUIRED;

    @ManyToOne
    @JoinColumn(name = "inventory_id", referencedColumnName = "inventory_id", insertable = false, updatable = false)
    @JsonIgnore
    private Inventory inventory;

    @PostLoad
    public void calculateAvailability() {
        if (id != null && inventory != null && sparePart != null) {
            // Check if the quantity in Inventory is greater than zero
            available = inventory.getQuantityForSparePart(sparePart) > 0;
        } else {
            available = false; // Handle null values or missing associations
        }
    }
}
