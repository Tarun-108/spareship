package com.taruns.spareship_backend.models.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private int productId;

    // Other fields
    @Column(name = "product_name")
    @NonNull
    private String productName;

    @ManyToMany
    @JoinTable(
            name = "product_spare_part",
            joinColumns = @JoinColumn(name = "product_id"),
            inverseJoinColumns = @JoinColumn(name = "sku_id")
    )
    @JsonIgnore
    private Set<SparePart> spareParts = new HashSet<>();

    @Override
    public String toString() {
        return "Product [id=" + productId + ", name=" + productName + "]";
    }


}
