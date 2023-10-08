package com.taruns.spareship_backend.contollers;


import com.taruns.spareship_backend.models.dto.AuthLoginDTO;
import com.taruns.spareship_backend.models.entities.ServiceCenter;
import com.taruns.spareship_backend.models.entities.WareHouse;
import com.taruns.spareship_backend.models.helpers.CustomerSupport;
import com.taruns.spareship_backend.models.helpers.PlanningTeam;
import com.taruns.spareship_backend.services.authentication.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping(value = "/auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

//    @PostMapping(value = "/service_center/register")
//    public ServiceCenterAuthRes registerServiceCenter(@RequestBody ServiceCenterRegisterReq serviceCenterRegisterReq){
//        //ServiceCenter s = new ServiceCenter();
//        return new ServiceCenterAuthRes("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6InNlcnZpY2VjZW50ZXIxQHNwYXJlc2hpcC5pbiJ9.9NzntxEsHYxpzyd7FiFZDYv5G_pnMCqr6hX0z9YPIo8", "registration success for email: "+serviceCenterRegisterReq.getEmail());
//    }
//
//
//    @PostMapping(value = "/warehouse/register")
//    public WareHouseAuthRes registerWareHouse(@RequestBody WareHouseRegisterReq wareHouseRegisterReq){
//        //WareHouse wareHouse = new WareHouse();
//        return new WareHouseAuthRes("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6IndhcmVob3VzZTFAc3BhcmVzaGlwLmluIn0.VSiVcPDtDeSsArLFecq3Pe0QU0hA9jwIGEctH6JuB6I", "login succesfull");
//    }

    @PostMapping(value = "/login")
    public ResponseEntity<?> loginWithEmailAndPassword(@RequestBody AuthLoginDTO authLoginDTO){
        if(Objects.equals(authLoginDTO.getUserType(), "SERVICE_CENTER")){
            Optional<ServiceCenter> serviceCenter = authenticationService.loginServiceCenter(authLoginDTO.getEmail(), authLoginDTO.getPassword());
            if(serviceCenter.isPresent()) return ResponseEntity.ok(serviceCenter.get());
            else ResponseEntity.notFound().build();
        }else if(Objects.equals(authLoginDTO.getUserType(), "WAREHOUSE")){
            Optional<WareHouse> wareHouse = authenticationService.loginWarehouse(authLoginDTO.getEmail(), authLoginDTO.getPassword());
            if(wareHouse.isPresent()) return ResponseEntity.ok(wareHouse.get());
            else ResponseEntity.notFound().build();
        }else if(Objects.equals(authLoginDTO.getUserType(), "PLANNING_TEAM")){
            Optional<PlanningTeam> planningTeam = authenticationService.loginPlanningTeam(authLoginDTO.getEmail(), authLoginDTO.getPassword());
            if(planningTeam.isPresent()) return ResponseEntity.ok(planningTeam);
            else ResponseEntity.notFound().build();
        }else if(Objects.equals(authLoginDTO.getUserType(), "CUSTOMER_SUPPORT")){
            Optional<CustomerSupport> customerSupport = authenticationService.loginCustomerSupport(authLoginDTO.getEmail(), authLoginDTO.getPassword());
            if(customerSupport.isPresent()) return ResponseEntity.ok(customerSupport.get());
            else ResponseEntity.notFound().build();
        }
        return ResponseEntity.notFound().build();
    }


}
