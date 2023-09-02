package com.taruns.spareship_backend.models.helpers;

import com.taruns.spareship_backend.models.entities.Product;
import com.taruns.spareship_backend.models.entities.SparePart;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;


@Getter
@Setter
@ToString
public class RawProductData extends Product{
    private ArrayList<SparePart> spareParts;
}
