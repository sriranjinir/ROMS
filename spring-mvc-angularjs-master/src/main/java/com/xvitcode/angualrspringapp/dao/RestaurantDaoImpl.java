/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.xvitcode.angualrspringapp.dao;

import com.xvitcode.angualrspringapp.model.Restaurant;
import java.util.List;
import org.hibernate.Criteria;
import org.springframework.stereotype.Repository;

/**
 *
 * @author srir
 */

@Repository("restaurantDao")
public class RestaurantDaoImpl extends AbstractDao implements RestaurantDao{

    public List<Restaurant> findAllRestaurants() {
        @SuppressWarnings("unchecked")
		Criteria criteria = getSession().createCriteria(Restaurant.class);
		return (List<Restaurant>) criteria.list();
    }
    
}
