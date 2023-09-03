package com.taruns.spareship_backend.models.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.taruns.spareship_backend.models.helpers.enums.Zone;
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
@Table(name = "SERVICE_CENTER_TABLE")
public class ServiceCenter {
    @Id
    private int id;
    private String contact;
    private int addressId;
    private Zone zone;
    private int inventoryId;
    private String email;
    private String encryptedPassword;
}


