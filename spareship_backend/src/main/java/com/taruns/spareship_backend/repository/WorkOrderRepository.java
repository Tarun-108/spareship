package com.taruns.spareship_backend.repository;

import com.taruns.spareship_backend.models.entities.WorkOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkOrderRepository extends JpaRepository<WorkOrder, Integer> {
    // Define custom queries if needed
}
