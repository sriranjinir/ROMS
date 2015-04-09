package com.xvitcoder.angualrspringapp.service;

import com.xvitcode.angualrspringapp.dao.MenuDao;
import com.xvitcode.angualrspringapp.model.Menu;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by srir on 9/04/2015.
 */
@Service("MenuService")
@Transactional
public class MenuServiceImpl implements MenuService{
    @Autowired
    private MenuDao dao;

    public List<Menu> findAllMenus(int restaurantId) {
        return dao.findAllMenus(restaurantId);
    }
}