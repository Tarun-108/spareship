package com.taruns.spareship_backend.models.reqres.res;

import lombok.*;

import java.util.List;


@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class ProductsRes{
    @Getter
    @Setter
    @ToString
    @AllArgsConstructor
    @NoArgsConstructor
    public class ProductRes {
        @Getter
        @Setter
        @ToString
        @AllArgsConstructor
        @NoArgsConstructor
        public class SparePart {
            private int sku_id;
            private String category;
            private String description;
            private int product_id;
        }
        private int product_id;
        private String product_name;
        private List<SparePart> spare_parts;
    }
    private List<ProductRes> productRes;
}



