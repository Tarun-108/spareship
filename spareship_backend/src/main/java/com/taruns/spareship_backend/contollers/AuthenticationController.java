package com.taruns.spareship_backend.contollers;


import com.taruns.spareship_backend.models.entities.ServiceCenter;
import com.taruns.spareship_backend.models.entities.WareHouse;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthenticationController {

    @PostMapping(value = "service_center/register")
    public String registerServiceCenter(@RequestBody ServiceCenter serviceCenter){
        return "A new service center is registered in the Database. Service Center: " + serviceCenter;
    }

    @GetMapping(value = "/service_center/login")
    public String getServiceCenter(@RequestParam String email, @RequestParam String password){
        return "Dummy Service Center having email: "+email;
    }

    @PostMapping(value = "warehouse/register")
    public String registerWareHouse(@RequestBody WareHouse wareHouse){
        return "A new Warehouse is registered in the Database. Warehouse: " + wareHouse;
    }

    @GetMapping(value = "/warehouse/login")
    public String getWareHouse(@RequestParam String email, @RequestParam String password){
        return "Dummy Warehouse having email: "+email;
    }


    @GetMapping(value = "/planning_team/login")
    public String getPlanningTeam(@RequestParam String email, @RequestParam String password){
        return "Dummy Planning Team having email: "+email;
    }

    @GetMapping(value = "/customer_support/login")
    public String getCustomerSupport(@RequestParam String email, @RequestParam String password){
        return "Dummy Customer Support having email: "+email;
    }

}
