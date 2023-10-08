package com.taruns.spareship_backend.repository;

import com.taruns.spareship_backend.models.entities.WorkOrderSparePart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface WorkOrderSparePartRepository extends JpaRepository<WorkOrderSparePart, Integer> {
}
