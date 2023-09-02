package com.taruns.spareship_backend.contollers;


import com.taruns.spareship_backend.models.entities.ServiceCenter;
import org.springframework.web.bind.annotation.*;

@RestController
public class ServiceCenterController {


    @GetMapping(value = "/service_center")
    public String getServiceCenter(){
        return "Dummy Service Center";
    }

    @PostMapping(value = "service_center/register")
    public String registerServiceCenter(@RequestBody ServiceCenter serviceCenter){
        return "A new service center is registered in the Database. Service Center: " + serviceCenter;
    }

//    @GetMapping(value = "/service_center")
//    public String getServiceCenter(@RequestParam("id")Long id){
//        return "Dummy Service Center id: "+id ;
//    }

}
