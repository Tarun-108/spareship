package com.taruns.spareship_backend.contollers;

import com.taruns.spareship_backend.models.entities.WareHouse;
import org.springframework.web.bind.annotation.*;


@RestController
public class WareHouseController {

    @PostMapping(value = "warehouse/register")
    public String registerServiceCenter(@RequestBody WareHouse wareHouse){
        return "A new Warehouse is registered in the Database. Warehouse: " + wareHouse;
    }

    @GetMapping(value = "/warehouse/login")
    public String getServiceCenter(@RequestParam String email, @RequestParam String password){
        return "Dummy Warehouse having email: "+email;
    }

    @GetMapping(value = "/warehouse/get_work_orders")
    public String getAllWorkOrders(){
        return "Work Orders of this WareHouse";
    }

    @GetMapping(value = "/warehouse/inventory")
    public String getInventory(){
        return "Inventory of WareHouse";
    }

}
