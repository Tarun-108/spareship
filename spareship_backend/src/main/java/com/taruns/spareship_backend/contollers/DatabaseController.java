package com.taruns.spareship_backend.contollers;


import com.taruns.spareship_backend.models.entities.Inventory;
import com.taruns.spareship_backend.models.helpers.RawProductData;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DatabaseController {

    @GetMapping(value = "/database/get_all_products")
    public String getAllProducts(){
        return "Inflated data for all products and their spare parts";
    }

    @GetMapping(value = "/database/get_product")
    public String getProduct(@RequestParam String skuId){
        return "product with sku: "+skuId;
    }

    @PostMapping(value = "/database/initializeProducts")
    public String initProducts(@RequestBody List<RawProductData> data){
        return "DB Initialized with products data: "+data;
    }

    @PostMapping(value = "/database/initializeInventory")
    public String initInventory(@RequestBody Inventory inventory, @RequestParam String id){
        return "Inventory is initialized with data: "+inventory+ " for id: "+id;
    }

}
