package com.michael200kg.purchaseserver.jpa.repository;

import com.michael200kg.purchaseserver.jpa.model.PurchaseItemEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PurchaseItemRepository extends JpaRepository<PurchaseItemEntity, Integer> {

}
