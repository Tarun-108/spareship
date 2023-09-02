package com.taruns.spareship_backend.contollers;

import com.taruns.spareship_backend.models.entities.WareHouse;
import org.springframework.web.bind.annotation.*;


@RestController
public class WareHouseController {


    @GetMapping(value = "/warehouse/get_work_orders")
    public String getAllWorkOrders(){
        return "Work Orders of this WareHouse";
    }

    @GetMapping(value = "/warehouse/inventory")
    public String getInventory(){
        return "Inventory of WareHouse";
    }

}
