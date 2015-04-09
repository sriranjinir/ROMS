package com.xvitcoder.angualrspringapp.service;

/**
 * Created by srir on 9/04/2015.
 */

import com.xvitcode.angualrspringapp.model.Menu;

import java.util.List;

/**
 *
 * @author admin
 */
public interface MenuService {
    List<Menu> findAllMenus(int restaurantId);

}