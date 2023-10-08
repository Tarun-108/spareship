package com.taruns.spareship_backend.services.authentication;

import com.taruns.spareship_backend.models.entities.ServiceCenter;
import com.taruns.spareship_backend.models.entities.WareHouse;
import com.taruns.spareship_backend.models.helpers.CustomerSupport;
import com.taruns.spareship_backend.models.helpers.PlanningTeam;
import com.taruns.spareship_backend.repository.ServiceCenterRepository;
import com.taruns.spareship_backend.repository.WarehouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

@Service
public class AuthenticationService {


    @Autowired
    private ServiceCenterRepository serviceCenterRepository;

    @Autowired
    private WarehouseRepository warehouseRepository;

    public Optional<ServiceCenter> loginServiceCenter(String email, String password) {
        ServiceCenter serviceCenter = serviceCenterRepository.findByEmail(email);
        if (Objects.equals(serviceCenter.getEncryptedPassword(), password)) return Optional.of(serviceCenter);
        else return Optional.empty();
    }


    public Optional<WareHouse> loginWarehouse(String email, String password) {
        WareHouse wareHouse = warehouseRepository.findByEmail(email);
        if (Objects.equals(wareHouse.getEncryptedPassword(), password)) return Optional.of(wareHouse);
        else return Optional.empty();
    }

    public Optional<PlanningTeam> loginPlanningTeam(String email, String password) {
        PlanningTeam planningTeam = new PlanningTeam("planningteam@spareship.in", "passwordp1");
        if (Objects.equals(planningTeam.getPassword(), password) && Objects.equals(planningTeam.getEmail(), email)) return Optional.of(planningTeam);
        else return Optional.empty();
    }

    public Optional<CustomerSupport> loginCustomerSupport(String email, String password) {
        CustomerSupport customerSupport = new CustomerSupport("customersupport@spareship.in", "passwordc1");
        if (Objects.equals(customerSupport.getPassword(), password) && Objects.equals(customerSupport.getEmail(), email)) return Optional.of(customerSupport);
        else return Optional.empty();
    }
}
