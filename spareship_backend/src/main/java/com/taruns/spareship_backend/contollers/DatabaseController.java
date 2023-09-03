package com.taruns.spareship_backend.contollers;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.taruns.spareship_backend.models.entities.Inventory;
import com.taruns.spareship_backend.models.helpers.RawProductData;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
public class DatabaseController {

    @GetMapping(value = "/database/get_all_products")
    public Map getAllProducts() throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        ClassPathResource resource = new ClassPathResource("products.json");

        return objectMapper.readValue(resource.getInputStream(), Map.class);

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

    @GetMapping(value = "/database/get_dispatch_orders")
    public Map getAllDispatchOrders() throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        ClassPathResource resource = new ClassPathResource("dispatchOrders.json");
        return objectMapper.readValue(resource.getInputStream(), Map.class);

    }
}
