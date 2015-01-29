/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.xvitcode.angualrspringapp.dao;

import com.xvitcode.angualrspringapp.model.Employee;
import com.xvitcode.angualrspringapp.model.Restaurant;
import java.util.List;

/**
 *
 * @author srir
 */
public interface RestaurantDao {

   List<Restaurant> findAllRestaurants();
}
