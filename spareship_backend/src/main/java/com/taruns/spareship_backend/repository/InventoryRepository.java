package com.taruns.spareship_backend.repository;

import com.taruns.spareship_backend.models.entities.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface InventoryRepository extends JpaRepository<Inventory, Integer> {
    // Define any custom query methods here
}
