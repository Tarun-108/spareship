package com.taruns.spareship_backend.services.service_center;

import com.taruns.spareship_backend.models.dto.WorkOrderDTO;
import com.taruns.spareship_backend.models.dto.WorkOrderUpdateDTO;
import com.taruns.spareship_backend.models.entities.Dispatch;
import com.taruns.spareship_backend.models.entities.ServiceCenter;
import com.taruns.spareship_backend.models.entities.WorkOrder;
import com.taruns.spareship_backend.models.entities.WorkOrderSparePart;
import com.taruns.spareship_backend.models.entities.embaddables.WorkOrderSparePartId;
import com.taruns.spareship_backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class WorkOrderService {
    @Autowired
    private WorkOrderRepository workOrderRepository;

    @Autowired
    private WorkOrderSparePartRepository workOrderSparePartRepository;

    @Autowired
    private DispatchRepository dispatchRepository;

    @Autowired
    private SparePartRepository sparePartRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ServiceCenterRepository serviceCenterRepository;

    public WorkOrder createWorkOrder(WorkOrderDTO workOrderDTO) {
        // Save the WorkOrder to the database
        WorkOrder rawWorkOrder = new WorkOrder();
        rawWorkOrder.setCustomerName(workOrderDTO.getCustomerName());
        rawWorkOrder.setCustomerContact(workOrderDTO.getCustomerContact());
        rawWorkOrder.setDescription(workOrderDTO.getDescription());
        if(productRepository.findById(workOrderDTO.getProductId()).isPresent())
            rawWorkOrder.setProduct(productRepository.findById(workOrderDTO.getProductId()).get());

        if(serviceCenterRepository.findById(workOrderDTO.getServiceCenterId()).isPresent())
            rawWorkOrder.setServiceCenter(serviceCenterRepository.findById(workOrderDTO.getServiceCenterId()).get());


        List<WorkOrderSparePart> workOrderSparePartList = new ArrayList<>();

        for(Integer i: workOrderDTO.getSparePartsIds()){
            WorkOrderSparePart workOrderSparePart = new WorkOrderSparePart();
            workOrderSparePart.setSparePart(sparePartRepository.findById(i).get());
            workOrderSparePart.setInventory(rawWorkOrder.getServiceCenter().getInventory());
            workOrderSparePart.setWorkOrder(rawWorkOrder);
            workOrderSparePart.setId(new WorkOrderSparePartId(rawWorkOrder.getWorkOrderId(), i));
            workOrderSparePart.calculateAvailability();
            workOrderSparePartList.add(workOrderSparePart);
        }

        rawWorkOrder.setWorkOrderSpareParts(workOrderSparePartList);

        WorkOrder createdWorkOrder = workOrderRepository.save(rawWorkOrder);

        List<WorkOrderSparePart> workOrderSparePartsCopy = new ArrayList<>(createdWorkOrder.getWorkOrderSpareParts());


        for(WorkOrderSparePart workOrderSparePart: workOrderSparePartsCopy){
            workOrderSparePart.getId().setWorkOrderId(createdWorkOrder.getWorkOrderId());
            workOrderSparePart.setInventory(createdWorkOrder.getServiceCenter().getInventory());
        }

        workOrderSparePartRepository.saveAll(workOrderSparePartsCopy);

        // Loop through WorkOrderSpareParts and handle availability and dispatching
        for (WorkOrderSparePart workOrderSparePart : createdWorkOrder.getWorkOrderSpareParts()) {
            boolean available = workOrderSparePart.isAvailable();
            if (!available) {
                // Handle dispatching of spare parts (create Dispatch records)
                Dispatch dispatch = new Dispatch();
                dispatch.setSparePart(workOrderSparePart.getSparePart());
                dispatch.setServiceCenter(createdWorkOrder.getServiceCenter());
                // Set other dispatch properties as needed
                dispatchRepository.save(dispatch);
            }

            // Save the WorkOrderSparePart to the database
            workOrderSparePartRepository.save(workOrderSparePart);
        }

        return createdWorkOrder;
    }

    public List<WorkOrder> getWorkOrders(String email){
        ServiceCenter serviceCenter = serviceCenterRepository.findByEmail(email);
        List<WorkOrder> workOrders = serviceCenter.getWorkOrders();
        for(WorkOrder workOrder: workOrders){
            for(WorkOrderSparePart workOrderSparePart: workOrder.getWorkOrderSpareParts()){
                workOrderSparePart.setInventory(workOrder.getServiceCenter().getInventory());
                workOrderSparePart.calculateAvailability();
            }
        }
        return workOrders;
    }

    public List<WorkOrder> getAllWorkOrders(){
        List<WorkOrder> workOrders = workOrderRepository.findAll();
        for(WorkOrder workOrder: workOrders){
            for(WorkOrderSparePart workOrderSparePart: workOrder.getWorkOrderSpareParts()){
                workOrderSparePart.calculateAvailability();
            }
        }
        return workOrders;
    }

    public Optional<WorkOrder> updateWorkOrderAtServiceCenter(WorkOrderUpdateDTO workOrderUpdateDTO) {
        Optional<WorkOrder> workOrderOptional = workOrderRepository.findById(workOrderUpdateDTO.getWorkOrderId());
        return  workOrderOptional;
    }
}
