package com.xvitcoder.angualrspringapp.controller;

import com.xvitcode.angualrspringapp.model.Restaurant;
import com.xvitcoder.angualrspringapp.service.RestaurantService;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import java.util.List;

import static java.util.Arrays.asList;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;

/**
 * Created by srir on 1/04/2015.
 */
//@RunWith(MockitoJUnitRunner.class)
public class Test3 {

    @InjectMocks
    private RestaurantController controller;

    @Mock
    private RestaurantService restaurantService;

    @Test
    public void shouldInvokeRepositoryGetAllWhenGetAllWithNoEditionSpecified() {
        Restaurant restaurant = new Restaurant();
        restaurant.setId(1);
        restaurant.setName("saravana bhavan");
        restaurant.setCuisine("South indian veg");
        restaurant.setCity("chennai");

        given(restaurantService.findAllRestaurants()).willReturn(asList(restaurant));

        List<Restaurant> restaurantList = controller.getRestaurantList();

        verify(restaurantService).findAllRestaurants();
        assertThat(restaurantList.size(), is(1));
        assertThat(restaurantList.get(0).getName(), is("saravana bhavan"));
        assertThat(restaurantList.get(0).getCuisine(), is("South indian veg"));
        assertThat(restaurantList.get(0).getCity(), is("chennai"));
    }

    void testGetCarPartialPage() {

    }
}
