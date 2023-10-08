package com.taruns.spareship_backend.contollers;


import com.taruns.spareship_backend.models.entities.WorkOrder;
import com.taruns.spareship_backend.services.service_center.WorkOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/customer_support")
public class CustomerSupportController {

    @Autowired
    WorkOrderService workOrderService;


    @GetMapping(value = "/get_work_orders")
    public ResponseEntity<List<WorkOrder>> getAllWorkOrders(){
        List<WorkOrder> workOrders = workOrderService.getAllWorkOrders();
        if(workOrders == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(workOrders);
    }

}
