package com.taruns.spareship_backend.models.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@ToString
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "spare_parts")
public class SparePart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sku_id")
    private int skuId;

    // Other fields
    @NonNull
    @Column(name = "category")
    private String category;
    @NonNull
    @Column(name = "description")
    private String description;

    @ManyToMany(mappedBy = "spareParts")
    @JsonIgnore
    private Set<Product> products = new HashSet<>();


    @ManyToMany(mappedBy = "spareParts")
    @JsonIgnore
    private List<Inventory> inventories = new ArrayList<>();

    @OneToMany(mappedBy = "sparePart")
    @JsonIgnore
    private List<Dispatch> dispatches = new ArrayList<>();

}
