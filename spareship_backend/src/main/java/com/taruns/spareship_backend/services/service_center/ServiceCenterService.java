package com.taruns.spareship_backend.services.service_center;

import com.taruns.spareship_backend.models.dto.SparePartDTO;
import com.taruns.spareship_backend.models.entities.Dispatch;
import com.taruns.spareship_backend.models.entities.Inventory;
import com.taruns.spareship_backend.models.entities.InventorySparePart;
import com.taruns.spareship_backend.models.entities.ServiceCenter;
import com.taruns.spareship_backend.repository.ServiceCenterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ServiceCenterService {
    @Autowired
    private ServiceCenterRepository serviceCenterRepository;


    public List<Dispatch> getDispatches(int serviceCenterId){
        Optional<ServiceCenter> serviceCenter = serviceCenterRepository.findById(serviceCenterId);
        if(serviceCenter.isPresent()){
            return serviceCenter.get().getDispatches();
        }
        return new ArrayList<>();
    }

    public List<SparePartDTO> getSparePartsByServiceCenterEmail(String email) {
        ServiceCenter serviceCenter = serviceCenterRepository.findByEmail(email);
        if (serviceCenter == null) {
            return null;
        }

        Inventory inventory = serviceCenter.getInventory();
        if (inventory == null) {
                return null;
        }

        List<InventorySparePart> inventorySpareParts = inventory.getInventorySpareParts();
        List<SparePartDTO> spareParts = new ArrayList<>();

        for (InventorySparePart inventorySparePart : inventorySpareParts) {
            SparePartDTO sparePartDTO = new SparePartDTO();
            sparePartDTO.setSkuId(inventorySparePart.getSparePart().getSkuId());
            sparePartDTO.setCategory(inventorySparePart.getSparePart().getCategory());
            sparePartDTO.setDescription(inventorySparePart.getSparePart().getDescription());
            sparePartDTO.setQuantity(inventorySparePart.getQuantity());
            spareParts.add(sparePartDTO);
        }

        return spareParts;
    }
}
