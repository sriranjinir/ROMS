package com.xvitcoder.angualrspringapp.controller;

import com.xvitcode.angualrspringapp.model.Menu;
import com.xvitcoder.angualrspringapp.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by srir on 28/02/2015.
 */
@Controller
@RequestMapping("/orders")
public class OrderController {
    @Autowired
    private MenuService menuService;

    @RequestMapping("/layout")
    public String getTrainPartialPage(ModelMap modelMap) {
        return "orders/layout";
    }
    @RequestMapping("/resLayout")
    public String getRestaurantPartialPage(ModelMap modelMap) {
        return "orders/selectRestaurant";
    }
    @RequestMapping("/selectItems")
    public String getItemsPartialPage(ModelMap modelMap) {
        return "orders/selectItems";
    }
    @RequestMapping("/previewInvoice")
    public String getInvoicePartialPage(ModelMap modelMap) {
        return "orders/previewInvoice";
    }
    @RequestMapping("/selectAddress")
    public String getDeliveryAddressPartialPage(ModelMap modelMap) {
        return "orders/selectAddress";
    }
    @RequestMapping("/orderHistory")
    public String getOrderHistoryPartialPage(ModelMap modelMap) {
        return "orders/orderHistory";
    }

    @RequestMapping("/{restaurantId}/menus")
    public @ResponseBody List<Menu> getMenuList(@PathVariable int restaurantId) {
        return menuService.findAllMenus(restaurantId);
    }
}
