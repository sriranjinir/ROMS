package com.xvitcoder.angualrspringapp.controller;

import com.roms.spring.configuration.AppConfig;
import com.xvitcode.angualrspringapp.model.Restaurant;
import com.xvitcoder.angualrspringapp.service.CarService;
import com.xvitcoder.angualrspringapp.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;

/**
 * Created with IntelliJ IDEA.
 * User: xvitcoder
 * Date: 12/21/12
 * Time: 12:23 AM
 */
@Controller
@RequestMapping("/cars")
public class CarController {

    @Autowired 
    private CarService carService;
    
    @Autowired
    private RestaurantService restaurantService;
    

    @RequestMapping("/carlist.json")
    public @ResponseBody List<Restaurant> getCarList() {
        return restaurantService.findAllRestaurants();
//        return carService.getAllCars();
    }

    @RequestMapping(value = "/addCar/{car}", method = RequestMethod.POST)
    public @ResponseBody void addCar(@PathVariable("car") String car) {
        carService.addCar(car);
    }

    @RequestMapping(value = "/removeCar/{car}", method = RequestMethod.DELETE)
    public @ResponseBody void removeCar(@PathVariable("car") String car) {
        carService.deleteCar(car);
    }

    @RequestMapping(value = "/removeAllCars", method = RequestMethod.DELETE)
    public @ResponseBody void removeAllCars() {
        carService.deleteAll();
    }

    @RequestMapping("/layout")
    public String getCarPartialPage() {
        return "cars/layout";
    }
}
