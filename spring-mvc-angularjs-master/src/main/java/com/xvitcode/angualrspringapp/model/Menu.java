package com.xvitcode.angualrspringapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 * Created by srir on 9/04/2015.
 */
@Entity
@Table(name = "MENU")
public class Menu {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    @Column(name = "Price", nullable = false)
    private Double price;

    @OneToOne
    @JoinColumn(name = "ITEMID", nullable = false)
    private Item item;

    @OneToOne
    @JoinColumn(name = "RESTAURANTID", nullable = false)
    private Restaurant restaurant;


    public String getId() {
        return id;
    }

    public void setId(String Id) {
        this.id = Id;
    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    public Restaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }


    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }



}
