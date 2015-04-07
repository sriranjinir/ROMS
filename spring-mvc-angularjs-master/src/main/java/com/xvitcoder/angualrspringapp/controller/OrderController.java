package com.xvitcoder.angualrspringapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by srir on 28/02/2015.
 */
@Controller
@RequestMapping("/orders")
public class OrderController {
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

}
