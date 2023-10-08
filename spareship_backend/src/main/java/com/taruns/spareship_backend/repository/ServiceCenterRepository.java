package com.taruns.spareship_backend.repository;

import com.taruns.spareship_backend.models.entities.ServiceCenter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceCenterRepository extends JpaRepository<ServiceCenter, Integer> {
    ServiceCenter findByEmail(String email);
}

