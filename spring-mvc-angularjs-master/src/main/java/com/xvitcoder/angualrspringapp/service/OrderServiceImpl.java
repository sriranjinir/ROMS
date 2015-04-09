package com.xvitcoder.angualrspringapp.service;

import com.xvitcode.angualrspringapp.dao.OrderDao;
import com.xvitcode.angualrspringapp.model.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by srir on 9/04/2015.
 */
@Service("OrderService")
@Transactional
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderDao dao;

    public List<Order> findAllOrders() {
        return dao.findAllOrders();
    }
}