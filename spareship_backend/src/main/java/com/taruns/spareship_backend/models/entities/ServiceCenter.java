package com.taruns.spareship_backend.models.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.taruns.spareship_backend.models.helpers.enums.Zone;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;


@Getter
@Setter
@Entity
@ToString
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "service_center")
public class ServiceCenter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "service_center_id")
    private int serviceCenterId;

    @Column(name = "pin_code", nullable = false)
    private int pinCode;

    @Column(nullable = false)
    private String contact;

    @Column(name = "address_str", nullable = false)
    private String addressStr;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Zone zone;

    @OneToOne
    @JoinColumn(name = "inventory_id", unique = true, nullable = false)
    private Inventory inventory;


    @Column(nullable = false)
    private String email;

    @Column(name = "encrypted_password", nullable = false)
    private String encryptedPassword;


    @OneToMany(mappedBy = "serviceCenter")
    @JsonIgnore
    private List<Dispatch> dispatches = new ArrayList<>();

    @OneToMany(mappedBy = "serviceCenter")
    @JsonIgnore
    private List<WorkOrder> workOrders = new ArrayList<>();

}


