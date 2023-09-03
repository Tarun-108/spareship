package com.taruns.spareship_backend.contollers;


import com.taruns.spareship_backend.models.entities.ServiceCenter;
import com.taruns.spareship_backend.models.entities.WareHouse;
import com.taruns.spareship_backend.models.helpers.PlanningTeam;
import com.taruns.spareship_backend.models.reqres.req.*;
import com.taruns.spareship_backend.models.reqres.res.CustomerSupportLoginRes;
import com.taruns.spareship_backend.models.reqres.res.PlanningTeamLoginRes;
import com.taruns.spareship_backend.models.reqres.res.ServiceCenterAuthRes;
import com.taruns.spareship_backend.models.reqres.res.WareHouseAuthRes;
import com.taruns.spareship_backend.services.authentication.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping(value = "/service_center/register")
    public ServiceCenterAuthRes registerServiceCenter(@RequestBody ServiceCenterRegisterReq serviceCenterRegisterReq){
        ServiceCenter s = new ServiceCenter();
        return new ServiceCenterAuthRes("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6InNlcnZpY2VjZW50ZXIxQHNwYXJlc2hpcC5pbiJ9.9NzntxEsHYxpzyd7FiFZDYv5G_pnMCqr6hX0z9YPIo8", "registration success for email: "+serviceCenterRegisterReq.getEmail(), s);
    }

    @PostMapping(value = "/service_center/login")
    public ServiceCenterAuthRes getServiceCenter(@RequestBody ServiceCenterLoginReq serviceCenterLoginReq){
        ServiceCenter s = new ServiceCenter();
        return new ServiceCenterAuthRes("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6InNlcnZpY2VjZW50ZXIxQHNwYXJlc2hpcC5pbiJ9.9NzntxEsHYxpzyd7FiFZDYv5G_pnMCqr6hX0z9YPIo8", "login success for email :"+serviceCenterLoginReq.getEmail(), s);
    }

    @PostMapping(value = "/warehouse/register")
    public WareHouseAuthRes registerWareHouse(@RequestBody WareHouseRegisterReq wareHouseRegisterReq){
        WareHouse wareHouse = new WareHouse();
        return new WareHouseAuthRes("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6IndhcmVob3VzZTFAc3BhcmVzaGlwLmluIn0.VSiVcPDtDeSsArLFecq3Pe0QU0hA9jwIGEctH6JuB6I", "login succesfull", wareHouse);
    }

    @PostMapping(value = "/warehouse/login")
    public WareHouseAuthRes getWareHouse(@RequestBody WareHouseLoginReq wareHouseLoginReq){
        WareHouse wareHouse = new WareHouse();
        return new WareHouseAuthRes("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6IndhcmVob3VzZTFAc3BhcmVzaGlwLmluIn0.VSiVcPDtDeSsArLFecq3Pe0QU0hA9jwIGEctH6JuB6I", "login succesfull", wareHouse);
    }


    @PostMapping(value = "/planning_team/login")
    public PlanningTeamLoginRes getPlanningTeam(@RequestBody PlanningTeamLoginReq planningTeamLoginReq){
        return new PlanningTeamLoginRes("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6InBsYW5uaW5ndGVhbUBzcGFyZXNoaXAuaW4ifQ.ULtaYmFzJPeNTRyP5_IxOc2H-Xd0vbIRxpuhZNJF1C4", "login success for email: "+planningTeamLoginReq.getEmail());
    }

    @PostMapping(value = "/customer_support/login")
    public CustomerSupportLoginRes getCustomerSupport(@RequestBody CustomerSupportLoginReq customerSupportLoginReq){
        return new CustomerSupportLoginRes("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6ImN1c3RvbWVyc3VwcG9ydEBzcGFyZXNoaXAuaW4ifQ.3RvFa3M47Z0eEgOl8zIx7fBSvB_yiDcH7rNwLwVc-vU", "login success for email: "+customerSupportLoginReq.getEmail());
    }

}
