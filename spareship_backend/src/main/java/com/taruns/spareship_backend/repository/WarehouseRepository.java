package com.taruns.spareship_backend.repository;

import com.taruns.spareship_backend.models.entities.WareHouse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WarehouseRepository extends JpaRepository<WareHouse, Integer> {
    WareHouse findByEmail(String email);
}
