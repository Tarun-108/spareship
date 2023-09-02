package com.taruns.spareship_backend.contollers;


import com.taruns.spareship_backend.models.entities.ServiceCenter;
import com.taruns.spareship_backend.models.entities.WorkOrder;
import org.springframework.web.bind.annotation.*;

@RestController
public class ServiceCenterController {

    @PostMapping(value = "/service_center/create_work_order")
    public String createWorkOrder(@RequestParam String serviceCenterId, @RequestBody WorkOrder workOrder){
        return "WorkOrder Created : "+workOrder+ " by Service Center: "+serviceCenterId;
    }

    @GetMapping(value = "/service_center/get_work_orders")
    public String getAllWorkOrders(){
        return "Work Orders of this Service Center";
    }

    @GetMapping(value = "/service_center/inventory")
    public String getInventory(){
        return "Inventory of Service Center";
    }


}