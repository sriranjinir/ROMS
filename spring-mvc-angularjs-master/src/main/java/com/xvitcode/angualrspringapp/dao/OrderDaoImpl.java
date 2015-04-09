package com.xvitcode.angualrspringapp.dao;

/**
 * Created by srir on 9/04/2015.
 */
import com.xvitcode.angualrspringapp.model.Order;
import org.hibernate.Criteria;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 *
 * @author admin
 */
@Repository("OrderDao")
public class OrderDaoImpl extends AbstractDao implements OrderDao {

    public List<Order> findAllOrders() {
        @SuppressWarnings("unchecked")
        Criteria criteria = getSession().createCriteria(Order.class);
        return (List<Order>) criteria.list();
    }
}

