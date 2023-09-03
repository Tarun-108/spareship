package com.taruns.spareship_backend.models.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;
import org.springframework.data.repository.cdi.Eager;

@Getter
@Setter
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "DISPATCH_ORDER_TABLE")
public class DispatchOrder {
    public enum DispatchStatus{
        ALLOTTED,
        DISPATCHED,
        COMPLETE
    }

    @Id
    private int id;
    private int wareHouseId;
    private int serviceCenterId;
    private DispatchStatus status = DispatchStatus.ALLOTTED;
}

