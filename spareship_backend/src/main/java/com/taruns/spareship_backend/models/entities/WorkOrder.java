package com.taruns.spareship_backend.models.entities;


import com.taruns.spareship_backend.models.helpers.enums.Status;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import lombok.*;

import java.sql.Timestamp;
import java.util.ArrayList;

@Getter
@Setter
@ToString
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "WORK_ORDER_TABLE")
public class WorkOrder {
    @Id
    private int id;
    private int productId;
    private int serviceCenterId;
    private int wareHouseId;
    private int dispatchOrderId;
    private String customerName;
    private String customerContact;
    private String description;
    private Status status;
    private Timestamp dateTime;
}
