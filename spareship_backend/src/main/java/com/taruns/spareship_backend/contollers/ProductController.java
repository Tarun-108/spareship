package com.taruns.spareship_backend.contollers;

import com.taruns.spareship_backend.models.dto.ProductDTO;
import com.taruns.spareship_backend.models.dto.ProductWithSparePartsDTO;
import com.taruns.spareship_backend.services.product_spare_parts.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/all")
    public ResponseEntity<List<ProductDTO>> getAllProducts(){
        List<ProductDTO> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    @GetMapping("/with_spare_part")
    public ResponseEntity<ProductWithSparePartsDTO> getProductAndSpareParts(@RequestParam int productId) {
        ProductWithSparePartsDTO product = productService.getProductWithSpareParts(productId);
        return ResponseEntity.ok(product);
    }

    @GetMapping("/with_spare_parts")
    public ResponseEntity<List<ProductWithSparePartsDTO>> getProductsAndSpareParts() {
        List<ProductWithSparePartsDTO> products = productService.getAllProductsWithSpareParts();
        return ResponseEntity.ok(products);
    }
}
