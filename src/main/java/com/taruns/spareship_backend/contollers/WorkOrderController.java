package com.taruns.spareship_backend.contollers;


import com.taruns.spareship_backend.models.entities.WorkOrder;
import org.springframework.web.bind.annotation.*;

@RestController
public class WorkOrderController {

    @GetMapping(value = "/work_order/get")
    public String getWorkOrders(){
        return "All Work Orders";
    }

    @GetMapping(value = "/work_order/get/{id}")
    public String getWorkOrder(@PathVariable String id){
        return "Work Order with ID: "+id;
    }

    @PutMapping(value = "/work_order/update")
    public String updateWorkOrder(@RequestBody WorkOrder workOrder){
        return "Work Order Updated. Update Work Order: " + workOrder;
    }

}
