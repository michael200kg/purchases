package com.michael200kg.purchaseserver.controllers;

import com.michael200kg.purchaseserver.converters.PurchaseModelConverter;
import com.michael200kg.purchaseserver.jpa.model.PurchaseEntity;
import com.michael200kg.purchaseserver.jpa.repository.PurchaseRepository;
import com.michael200kg.purchaseserver.openapi.api.TestPurchasesApi;
import com.michael200kg.purchaseserver.openapi.dto.Purchase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static com.michael200kg.purchaseserver.constants.ApplicationConstants.SERVICE_PATH_PREFIX;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping(SERVICE_PATH_PREFIX)
public class TestPurchasesApiController implements TestPurchasesApi {

    private final PurchaseRepository purchaseRepository;
    private final PurchaseModelConverter purchaseModelConverter;

    @Autowired
    public TestPurchasesApiController(PurchaseRepository purchaseRepository,
                                      PurchaseModelConverter purchaseModelConverter) {
        this.purchaseRepository = purchaseRepository;
        this.purchaseModelConverter = purchaseModelConverter;
    }

    @Override
    public ResponseEntity<List<Purchase>> getTestMessage() {
        List<PurchaseEntity> purchaseEntities = purchaseRepository.findAll();
        return new ResponseEntity<>(purchaseModelConverter.entityListToDtoList(purchaseEntities), OK);
    }
}
