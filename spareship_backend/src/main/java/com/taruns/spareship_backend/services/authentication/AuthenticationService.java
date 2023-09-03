package com.taruns.spareship_backend.services.authentication;

import com.taruns.spareship_backend.models.entities.ServiceCenter;

public interface AuthenticationService {
    ServiceCenter registerServiceCenter(ServiceCenter serviceCenter);
}
