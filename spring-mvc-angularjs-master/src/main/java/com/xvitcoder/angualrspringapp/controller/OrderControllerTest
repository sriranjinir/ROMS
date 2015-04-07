package com.xvitcoder.angualrspringapp.controller
import org.junit.Test
import org.junit.runner.RunWith
import org.mockito.InjectMocks

import static org.hamcrest.core.Is.is
import org.mockito.runners.MockitoJUnitRunner
import static org.hamcrest.MatcherAssert.assertThat
/**
 * Created by srir on 2/04/2015.
 */
@RunWith(MockitoJUnitRunner.class)
public class OrderControllerTest {

    @InjectMocks
    private OrderController orderController;

    @Test
    public void testGetRestaurantPartialPage() {
        assertThat(orderController.getRestaurantPartialPage(), is("orders/selectRestaurant"));
    }

    @Test
    public void testGetItemsPartialPage() {
        assertThat(orderController.getItemsPartialPage(), is("orders/selectItems"));
    }

    @Test
    public void testGetInvoicePartialPage() {
        assertThat(orderController.getInvoicePartialPage(), is("orders/previewInvoice"));
    }

    @Test
    public void testGetDeliveryAddressPartialPage() {
        assertThat(orderController.getDeliveryAddressPartialPage(), is("orders/selectAddress"));
    }
}
