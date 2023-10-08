package com.taruns.spareship_backend.contollers;

import com.taruns.spareship_backend.models.dto.SparePartDTO;
import com.taruns.spareship_backend.models.entities.Dispatch;
import com.taruns.spareship_backend.services.warehouse.DispatchService;
import com.taruns.spareship_backend.services.warehouse.WarehouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/warehouse")
public class WareHouseController {

    @Autowired
    WarehouseService warehouseService;

    @Autowired
    DispatchService dispatchService;

    @GetMapping(value = "/get_dispatches")
    public ResponseEntity<List<Dispatch>> getAllDispatches(@RequestParam int warehouseId){
        List<Dispatch> dispatches = warehouseService.getDispatches(warehouseId);
        if(dispatches.isEmpty()) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(dispatches);
    }


    @GetMapping(value = "/update_dispatch")
    public ResponseEntity<Dispatch> updateDispatch(@RequestParam int dispatchId){
        Optional<Dispatch> dispatchOpt = dispatchService.updateToDispatched(dispatchId);
        return dispatchOpt.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }


    @GetMapping("/inventory")
    public ResponseEntity<List<SparePartDTO>> getSparePartsByServiceCenterEmail(@RequestParam String email) {
        List<SparePartDTO> spareParts = warehouseService.getSparePartsByServiceCenterEmail(email);
        if(spareParts == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(spareParts);
    }

}
