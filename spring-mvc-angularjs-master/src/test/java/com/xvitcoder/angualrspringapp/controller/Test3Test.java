/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.xvitcoder.angualrspringapp.controller;

import org.junit.Test;
import org.mockito.InjectMocks;

import static org.hamcrest.core.Is.is;
import org.mockito.runners.MockitoJUnitRunner;
import static org.hamcrest.MatcherAssert.assertThat;
import org.junit.runner.RunWith;

import static org.hamcrest.core.Is.is;
import org.mockito.runners.MockitoJUnitRunner;
import static org.hamcrest.MatcherAssert.assertThat;

/**
 *
 * @author srir
 */
@RunWith(MockitoJUnitRunner.class)
public class Test3Test {
    
    @InjectMocks
    private OrderController orderController;

    @Test
    public void testGetRestaurantPartialPage() {
        assertThat(orderController.getRestaurantPartialPage(null), is("orders/selectRestaurant"));
    }

    @Test
    public void testGetItemsPartialPage() {
        assertThat(orderController.getItemsPartialPage(null), is("orders/selectItems"));
    }

    @Test
    public void testGetInvoicePartialPage() {
        assertThat(orderController.getInvoicePartialPage(null), is("orders/previewInvoice"));
    }

    @Test
    public void testGetDeliveryAddressPartialPage() {
        assertThat(orderController.getDeliveryAddressPartialPage(null), is("orders/selectAddress"));
    }
}
