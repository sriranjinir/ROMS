package com.xvitcoder.angualrspringapp.controller
import com.xvitcode.angualrspringapp.model.Restaurant
import com.xvitcoder.angualrspringapp.service.RestaurantService
import org.junit.Test
import org.junit.runner.RunWith
import org.mockito.InjectMocks
import org.mockito.Mock
import org.mockito.runners.MockitoJUnitRunner

import static java.util.Arrays.asList
import static org.hamcrest.MatcherAssert.assertThat
import static org.hamcrest.core.Is.is
import static org.mockito.BDDMockito.given
import static org.mockito.Mockito.verify
/**
 * Created by srir on 1/04/2015.
 */
@RunWith(MockitoJUnitRunner.class)
public class RestaurantControllerTest {

    @InjectMocks
    private RestaurantController controller;

    @Mock
    private RestaurantService restaurantService;

    @Test
    public void shouldGetAllRestaurants() {
        Restaurant restaurant = new Restaurant();
        restaurant.setId(1);
        restaurant.setName("saravana bhavan");
        restaurant.setCuisine("South indian veg");
        restaurant.setCity("chennai");

        //mock the service to get the restaurants
        given(restaurantService.findAllRestaurants()).willReturn(asList(restaurant));

        List<Restaurant> restaurantList = controller.getRestaurantList();

        //verify the service.findAllRestaurants is getting called by the controller.
        verify(restaurantService).findAllRestaurants();
        assertThat(restaurantList.size(), is(1));
        assertThat(restaurantList.get(0).getName(), is("saravana bhavan"));
        assertThat(restaurantList.get(0).getCuisine(), is("South indian veg"));
        assertThat(restaurantList.get(0).getCity(), is("chennai"));
    }

    @Test
    public void testGetRestaurantPartialPage() {
        assertThat(controller.getRestaurantPartialPage(), is("restaurants/layout"));
    }
}
