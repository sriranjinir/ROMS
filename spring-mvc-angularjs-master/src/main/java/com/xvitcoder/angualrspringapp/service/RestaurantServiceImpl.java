/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.xvitcoder.angualrspringapp.service;

import com.xvitcode.angualrspringapp.configuration.AppConfig;
import com.xvitcode.angualrspringapp.dao.RestaurantDao;
import com.xvitcode.angualrspringapp.model.Restaurant;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author srir
 */
@Service("restaurantService")
@Transactional
public class RestaurantServiceImpl implements RestaurantService{
    @Autowired
    private RestaurantDao dao;

    	public List<Restaurant> findAllRestaurants() {
		return dao.findAllRestaurants();
	}
}
