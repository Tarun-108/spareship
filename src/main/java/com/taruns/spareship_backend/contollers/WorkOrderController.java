package com.taruns.spareship_backend.contollers;


import com.taruns.spareship_backend.models.entities.WorkOrder;
import com.taruns.spareship_backend.models.helpers.enums.Status;
import org.hibernate.jdbc.Work;
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


    @PutMapping(value = "/work_order/update_status")
    public String updateWorkOrder(@RequestParam String workOrderId, @RequestParam Status status){
        return "Work Order  with ID: "+workOrderId+ " is Updated. Update Work Order Status: " + status;
    }

    @PostMapping(value = "/work_order/allot_order")
    public String allotWorkOrder(@RequestParam String wareHouseId, @RequestParam String workOrderId){
        return "Work Order "+workOrderId+ " is allotted to WareHouse: "+wareHouseId;
    }

}
