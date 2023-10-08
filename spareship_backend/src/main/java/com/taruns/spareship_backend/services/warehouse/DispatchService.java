package com.taruns.spareship_backend.services.warehouse;


import com.taruns.spareship_backend.models.dto.WareHouseForDispatchDTO;
import com.taruns.spareship_backend.models.entities.Dispatch;
import com.taruns.spareship_backend.models.entities.WareHouse;
import com.taruns.spareship_backend.models.helpers.enums.DispatchStatus;
import com.taruns.spareship_backend.repository.DispatchRepository;
import com.taruns.spareship_backend.repository.WarehouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class DispatchService {

    @Autowired
    DispatchRepository dispatchRepository;

    @Autowired
    WarehouseRepository warehouseRepository;

    public List<Dispatch> getAllDispatch(){
        return dispatchRepository.findAll();
    }

    public List<WareHouseForDispatchDTO> getWareHouseForDispatches(int dispatchId){
        List<WareHouse> wareHouses = warehouseRepository.findAll();
        List<WareHouseForDispatchDTO> wareHouseForDispatchDTOS = new ArrayList<>();
        for (WareHouse wareHouse: wareHouses ) {
            wareHouseForDispatchDTOS.add(new WareHouseForDispatchDTO(wareHouse.getWarehouseId(), wareHouse.getEmail(), wareHouse.getAddressStr(), wareHouse.getZone()));
        }
        return wareHouseForDispatchDTOS;
    }

    public Optional<Dispatch> allotWarehouse(int warehouseId, int dispatchId){
        Optional<Dispatch> dispatchOptional = dispatchRepository.findById(dispatchId);
        if(dispatchOptional.isPresent()){
            Dispatch dispatch = dispatchOptional.get();
            dispatch.setWarehouse(warehouseRepository.findById(warehouseId).get());
            dispatch.setStatus(DispatchStatus.ALLOTTED);
            dispatchOptional = Optional.of(dispatchRepository.save(dispatch));
        }
        return dispatchOptional;
    }

    public Optional<Dispatch> updateToDispatched(int dispatchId) {
        Optional<Dispatch> dispatchOptional = dispatchRepository.findById(dispatchId);
        if (dispatchOptional.isPresent()){
            Dispatch dispatch = dispatchOptional.get();
            dispatch.setStatus(DispatchStatus.DISPATCHED);
            dispatchOptional = Optional.of(dispatchRepository.save(dispatch));
        }
        return dispatchOptional;
    }

    public Optional<Dispatch> updateToReceived(int dispatchId) {
        Optional<Dispatch> dispatchOptional = dispatchRepository.findById(dispatchId);
        if (dispatchOptional.isPresent()){
            Dispatch dispatch = dispatchOptional.get();
            dispatch.setStatus(DispatchStatus.RECEIVED);
            dispatchOptional = Optional.of(dispatchRepository.save(dispatch));
        }
        return dispatchOptional;
    }

}
