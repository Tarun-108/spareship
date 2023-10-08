package com.taruns.spareship_backend.contollers;


import com.taruns.spareship_backend.models.dto.SparePartDTO;
import com.taruns.spareship_backend.models.dto.WorkOrderDTO;
import com.taruns.spareship_backend.models.dto.WorkOrderUpdateDTO;
import com.taruns.spareship_backend.models.entities.Dispatch;
import com.taruns.spareship_backend.models.entities.WorkOrder;
import com.taruns.spareship_backend.services.service_center.ServiceCenterService;
import com.taruns.spareship_backend.services.service_center.WorkOrderService;
import com.taruns.spareship_backend.services.warehouse.DispatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/service_center")
public class ServiceCenterController {


    @Autowired
    private ServiceCenterService serviceCenterService;

    @Autowired
    private WorkOrderService workOrderService;

    @Autowired
    DispatchService dispatchService;


    @PostMapping(value = "/create_work_order")
    public ResponseEntity<WorkOrder> createWorkOrder(@RequestBody WorkOrderDTO workOrder){
        WorkOrder workOrderRes = workOrderService.createWorkOrder(workOrder);
        if(workOrderRes == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(workOrderRes);
    }


    @GetMapping(value = "/get_work_orders")
    public ResponseEntity<List<WorkOrder>> getAllWorkOrders(@RequestParam String email){
        List<WorkOrder> workOrders = workOrderService.getWorkOrders(email);
        if(workOrders == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(workOrders);
    }

    @PostMapping(value = "/update_work_order")
    public ResponseEntity<WorkOrder> updateWorkOrder(@RequestBody WorkOrderUpdateDTO workOrderUpdateDTO){
        Optional<WorkOrder> workOrder = workOrderService.updateWorkOrderAtServiceCenter(workOrderUpdateDTO);
        return workOrder.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }


    @GetMapping(value = "/get_dispatches")
    public ResponseEntity<List<Dispatch>> getAllDispatches(@RequestParam int serviceCenterId){
        List<Dispatch> dispatches = serviceCenterService.getDispatches(serviceCenterId);
        if(dispatches.isEmpty()) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(dispatches);
    }


    @GetMapping(value = "/update_dispatch")
    public ResponseEntity<Dispatch> updateDispatchOrderArrival(@RequestParam int dispatchId){
        Optional<Dispatch> dispatchOpt = dispatchService.updateToReceived(dispatchId);
        return dispatchOpt.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/inventory")
    public ResponseEntity<List<SparePartDTO>> getSparePartsByServiceCenterEmail(@RequestParam String email) {
        List<SparePartDTO> spareParts = serviceCenterService.getSparePartsByServiceCenterEmail(email);
        if(spareParts == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(spareParts);
    }

}
