package com.taruns.spareship_backend.services.product_spare_parts;

import com.taruns.spareship_backend.models.dto.ProductDTO;
import com.taruns.spareship_backend.models.dto.ProductWithSparePartsDTO;
import com.taruns.spareship_backend.models.entities.Product;
import com.taruns.spareship_backend.models.entities.SparePart;
import com.taruns.spareship_backend.repository.ProductRepository;
import com.taruns.spareship_backend.repository.SparePartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private SparePartRepository sparePartRepository;

    public List<ProductWithSparePartsDTO> getAllProductsWithSpareParts() {
        List<Product> products = productRepository.findAll();
        List<ProductWithSparePartsDTO> dtos = new ArrayList<>();

        for (Product product : products) {
            ProductWithSparePartsDTO dto = new ProductWithSparePartsDTO();
            dto.setProductId(product.getProductId());
            dto.setProductName(product.getProductName());

            // Fetch and populate the spare parts data for the product
             List<SparePart> spareParts = sparePartRepository.findByProducts(product);
             dto.setSpareParts(spareParts);

            dtos.add(dto);
        }

        return dtos;
    }

    public ProductWithSparePartsDTO getProductWithSpareParts(int productId) {

        Product product = productRepository.findById(productId).get();
        ProductWithSparePartsDTO dto = new ProductWithSparePartsDTO();

        dto.setProductId(product.getProductId());
        dto.setProductName(product.getProductName());

        // Fetch and populate the spare parts data for the product
        List<SparePart> spareParts = sparePartRepository.findByProducts(product);
        dto.setSpareParts(spareParts);

        return dto;
    }

    public List<ProductDTO> getAllProducts() {
        List<ProductDTO> productDTOS = new ArrayList<>();
        List<Product> products = productRepository.findAll();
        for(Product product: products){
            ProductDTO productDTO = new ProductDTO(product.getProductId(), product.getProductName());
            productDTOS.add(productDTO);
        }
        return productDTOS;
    }
}
