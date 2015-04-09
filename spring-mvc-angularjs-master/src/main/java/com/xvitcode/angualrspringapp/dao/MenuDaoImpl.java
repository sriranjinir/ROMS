package com.xvitcode.angualrspringapp.dao;

import com.xvitcode.angualrspringapp.model.Menu;
import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 *
 * @author admin
 */
@Repository("menuDao")
public class MenuDaoImpl extends AbstractDao implements MenuDao {

    public List<Menu> findAllMenus(int restaurantId) {
        @SuppressWarnings("unchecked")
        Criteria criteria = getSession().createCriteria(Menu.class)
                .add(Restrictions.eq("restaurant.id", restaurantId));
        return (List<Menu>) criteria.list();
    }

}
