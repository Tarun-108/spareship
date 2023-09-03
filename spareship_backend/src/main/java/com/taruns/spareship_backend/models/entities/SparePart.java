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
@Table(name = "SPARE_PARTS")
public class SparePart {
    @Id
    private int skuId;
    private String category;
    private String description;
    private int productId;
}
