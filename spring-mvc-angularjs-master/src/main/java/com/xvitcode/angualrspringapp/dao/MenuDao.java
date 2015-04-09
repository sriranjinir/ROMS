package com.xvitcode.angualrspringapp.dao;

import com.xvitcode.angualrspringapp.model.Menu;
import java.util.List;
/**
 *
 * @author admin
 */
public interface MenuDao {
    List<Menu> findAllMenus(int restaurantId);
}
