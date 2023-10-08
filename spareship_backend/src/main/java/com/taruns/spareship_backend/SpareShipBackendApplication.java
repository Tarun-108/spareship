package com.taruns.spareship_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan("com.taruns.spareship_backend.models.entities")
public class SpareShipBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpareShipBackendApplication.class, args);
    }

}
