package com.taruns.spareship_backend.services.warehouse;

import com.taruns.spareship_backend.models.dto.SparePartDTO;
import com.taruns.spareship_backend.models.entities.*;
import com.taruns.spareship_backend.repository.WarehouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class WarehouseService {

    @Autowired
    private WarehouseRepository warehouseRepository;

    public List<SparePartDTO> getSparePartsByServiceCenterEmail(String email) {
        WareHouse wareHouse = warehouseRepository.findByEmail(email);
        if (wareHouse == null) {
            return null;
        }

        Inventory inventory = wareHouse.getInventory();
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

    public List<Dispatch> getDispatches(int warehouseId) {
        Optional<WareHouse> warehouse = warehouseRepository.findById(warehouseId);
        if(warehouse.isPresent()){
            return warehouse.get().getDispatches();
        }
        return new ArrayList<>();
    }

}
