package com.taruns.spareship_backend.contollers;


import com.taruns.spareship_backend.models.entities.WorkOrder;
import com.taruns.spareship_backend.models.helpers.enums.Status;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class WorkOrderController {

    @GetMapping(value = "/work_order/getAll")
    public List<WorkOrder> getWorkOrders(){
        List<WorkOrder> workOrders = new ArrayList<>();
        workOrders.add(new WorkOrder());
        workOrders.add(new WorkOrder());
        workOrders.add(new WorkOrder());
        workOrders.add(new WorkOrder());
        workOrders.add(new WorkOrder());
        return workOrders;
    }

    @GetMapping(value = "/work_order/get/{id}")
    public String getWorkOrder(@PathVariable String id){
        return "Work Order with ID: "+id;
    }

    @GetMapping(value = "work_order/get")
    public String getWorkOrderFromCustomerContact(@RequestParam String customerContact){
        return "WorkOrder of Specific Customer with contact: "+customerContact;
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
