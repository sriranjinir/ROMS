package com.xvitcode.angualrspringapp.dao;

import com.xvitcode.angualrspringapp.model.Order;

import java.util.List;

/**
 * Created by srir on 9/04/2015.
 */
public interface OrderDao {
    List<Order> findAllOrders();
}
