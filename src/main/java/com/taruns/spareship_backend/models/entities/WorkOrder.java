package com.taruns.spareship_backend.models.entities;


import com.taruns.spareship_backend.models.helpers.enums.Status;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;

@Getter
@Setter
@ToString
public class WorkOrder {
    private String id;
    private String customerName;
    private String customerContact;
    private String description;
    private String productId;
    private ArrayList<String> requirements;
    private Status status;
    private String dateTime;
}
