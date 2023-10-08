package com.taruns.spareship_backend.models.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.taruns.spareship_backend.models.helpers.enums.Zone;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@ToString
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "warehouse")
public class WareHouse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "warehouse_id")
    private int warehouseId;

    @Column(name = "pin_code", nullable = false)
    private int pinCode;

    @NonNull
    @Column(nullable = false)
    private String contact;

    @NonNull
    @Column(name = "address_str", nullable = false)
    private String addressStr;

    @NonNull
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Zone zone;

    @OneToOne
    @JoinColumn(name = "inventory_id", unique = true)
    private Inventory inventory;

    @NonNull
    @Column(nullable = false)
    private String email;

    @NonNull
    @Column(name = "encrypted_password", nullable = false)
    private String encryptedPassword;


    @OneToMany(mappedBy = "warehouse")
    @JsonIgnore
    private List<Dispatch> dispatches = new ArrayList<>();

}


