package com.taruns.spareship_backend.models.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Getter
@Setter
@ToString
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "REQUIREMENT_TABLE")
public class Requirement {
    @Id
    private int id;
    private int serviceCenterId;
    private int wareHouseId;
    private int sparePartId;
    private int workOrderId;
    private int dispatchOrderId;
}


