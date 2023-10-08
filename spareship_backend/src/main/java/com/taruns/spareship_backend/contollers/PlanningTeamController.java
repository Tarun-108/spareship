package com.taruns.spareship_backend.contollers;


import com.taruns.spareship_backend.models.dto.WareHouseForDispatchDTO;
import com.taruns.spareship_backend.models.entities.Dispatch;
import com.taruns.spareship_backend.services.warehouse.DispatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/planning_team")
public class PlanningTeamController {

    @Autowired
    DispatchService dispatchService;


    @GetMapping(value = "/get_dispatches")
    public ResponseEntity<List<Dispatch>> getAllWorkOrders(){
        List<Dispatch> dispatches = dispatchService.getAllDispatch();
        if(dispatches == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(dispatches);
    }

    @GetMapping(value = "/get_warehouses")
    public ResponseEntity<List<WareHouseForDispatchDTO>> getWarehousesForDispatch(@RequestParam int dispatchId){
        List<WareHouseForDispatchDTO> warehouses = dispatchService.getWareHouseForDispatches(dispatchId);
        if(warehouses == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(warehouses);
    }

    @GetMapping(value = "/set_warehouse")
    public ResponseEntity<Dispatch> setWarehouseForDispatch(@RequestParam int warehouseId, @RequestParam int dispatchId){
        Optional<Dispatch> dispatchOptional = dispatchService.allotWarehouse(warehouseId, dispatchId);
        return dispatchOptional.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

}
