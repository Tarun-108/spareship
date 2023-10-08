package com.taruns.spareship_backend.repository;


import com.taruns.spareship_backend.models.entities.Product;
import com.taruns.spareship_backend.models.entities.SparePart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface SparePartRepository extends JpaRepository<SparePart, Integer> {
    List<SparePart> findByProducts(Product product);

}
