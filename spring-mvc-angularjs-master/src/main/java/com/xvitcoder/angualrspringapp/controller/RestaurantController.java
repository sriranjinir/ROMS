package com.xvitcoder.angualrspringapp.controller;

import com.xvitcode.angualrspringapp.model.Restaurant;
import com.xvitcoder.angualrspringapp.service.CarService;
import com.xvitcoder.angualrspringapp.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/restaurants")
public class RestaurantController {

    @Autowired 
    private CarService carService;
    
    @Autowired
    private RestaurantService restaurantService;
    

    @RequestMapping("/restaurantlist.json")
    public @ResponseBody List<Restaurant> getRestaurantList() {
        return restaurantService.findAllRestaurants();
    }

    @RequestMapping("/layout")
    public String getRestaurantPartialPage() {
        return "restaurants/layout";
    }
}
