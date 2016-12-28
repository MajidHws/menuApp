
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class Data{
    food:any;
    sport:any;
    constructor(){
        this.food = [
        {itemName: "Soachi", quantity: 1, desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard", img:"http://lorempixel.com/400/200/food"},
        {itemName: "Chease Cake", quantity: 3, desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard", img:"http://lorempixel.com/400/200/food"},
        {itemName: "Jojo Cave", quantity: 5, desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard", img:"http://lorempixel.com/400/200/food"},
        {itemName: "The Face", quantity: 25, desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard", img:"http://lorempixel.com/400/200/food"},
        {itemName: "Eat It", quantity: 0, desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard", img:"http://lorempixel.com/400/200/food"},
        {itemName: "Banana Cake", quantity: 2, desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard", img:"http://lorempixel.com/400/200/food"},
        {itemName: "Cave Cake", quantity: 6, desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard", img:"http://lorempixel.com/400/200/food"},
        {itemName: "Soachi", quantity: 6, desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard", img:"http://lorempixel.com/400/200/food"},
        {itemName: "Strowberry Cake", quantity:110, desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard", img:"http://lorempixel.com/400/200/food"},
        {itemName: "Jello Been", quantity: 6, desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard", img:"http://lorempixel.com/400/200/food"},
        {itemName: "Nougat", quantity: 8, desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard", img:"http://lorempixel.com/400/200/food"},
        {itemName: "Araina Cake", quantity: 10, desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard", img:"http://lorempixel.com/400/200/food"},
        {itemName: "Me Cake", quantity: 7, desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard", img:"http://lorempixel.com/400/200/food"},
        {itemName: "Colourfull Cake", quantity: 10, desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard", img:"http://lorempixel.com/400/200/food"},
        {itemName: "Dummy Cake", quantity: 9, desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard", img:"http://lorempixel.com/400/200/food"},
        {itemName: "Baked Cake", quantity: 10, desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard", img:"http://lorempixel.com/400/200/food"},
        {itemName: "Do The Cake", quantity: 10, desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard", img:"http://lorempixel.com/400/200/food"},
        {itemName: "Soda Cake", quantity: 8, desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard", img:"http://lorempixel.com/400/200/food"},
        {itemName: "Kick The Cake", quantity: 6, desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard", img:"http://lorempixel.com/400/200/food"},
        {itemName: "Creamy Cake", quantity: 10, desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard", img:"http://lorempixel.com/400/200/food"},
        {itemName: "Sinamon Cake", quantity: 4, desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard", img:"http://lorempixel.com/400/200/food"},
        {itemName: "Genger Cake", quantity: 5, desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard", img:"http://lorempixel.com/400/200/food"},
        {itemName: "Genger Bread", quantity: 10, desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard", img:"http://lorempixel.com/400/200/food"},
        {itemName: "Hot Tea", quantity: 10, desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard", img:"http://lorempixel.com/400/200/food"},
        {itemName: "Ice Cream", quantity: 8, desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard", img:"http://lorempixel.com/400/200/food"},
        {itemName: "Soft Roll", quantity: 10, desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard", img:"http://lorempixel.com/400/200/food"},
        {itemName: "The Taste", quantity: 25, desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard", img:"http://lorempixel.com/400/200/food"},

        ]

        this.sport = [
            {name: 'CR7', img: 'http://lorempixel.com/400/200/sports', desc: 'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', age: 31, height: 7.5, country: 'Spain'},
            {name: 'CR7', img: 'http://lorempixel.com/400/200/sports', desc: 'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', age: 31, height: 7.5, country: 'Spain'},
            {name: 'CR7', img: 'http://lorempixel.com/400/200/sports', desc: 'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', age: 31, height: 7.5, country: 'Spain'},
            {name: 'CR7', img: 'http://lorempixel.com/400/200/sports', desc: 'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', age: 31, height: 7.5, country: 'Spain'},
            {name: 'CR7', img: 'http://lorempixel.com/400/200/sports', desc: 'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', age: 31, height: 7.5, country: 'Spain'},
            {name: 'CR7', img: 'http://lorempixel.com/400/200/sports', desc: 'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', age: 31, height: 7.5, country: 'Spain'},
            {name: 'CR7', img: 'http://lorempixel.com/400/200/sports', desc: 'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', age: 31, height: 7.5, country: 'Spain'},
            {name: 'CR7', img: 'http://lorempixel.com/400/200/sports', desc: 'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', age: 31, height: 7.5, country: 'Spain'},
            {name: 'CR7', img: 'http://lorempixel.com/400/200/sports', desc: 'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', age: 31, height: 7.5, country: 'Spain'},
            {name: 'CR7', img: 'http://lorempixel.com/400/200/sports', desc: 'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', age: 31, height: 7.5, country: 'Spain'},
            {name: 'CR7', img: 'http://lorempixel.com/400/200/sports', desc: 'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', age: 31, height: 7.5, country: 'Spain'},
            {name: 'CR7', img: 'http://lorempixel.com/400/200/sports', desc: 'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', age: 31, height: 7.5, country: 'Spain'},
            {name: 'CR7', img: 'http://lorempixel.com/400/200/sports', desc: 'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', age: 31, height: 7.5, country: 'Spain'},
            {name: 'CR7', img: 'http://lorempixel.com/400/200/sports', desc: 'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', age: 31, height: 7.5, country: 'Spain'},
            {name: 'CR7', img: 'http://lorempixel.com/400/200/sports', desc: 'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', age: 31, height: 7.5, country: 'Spain'},
            {name: 'CR7', img: 'http://lorempixel.com/400/200/sports', desc: 'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', age: 31, height: 7.5, country: 'Spain'},
            {name: 'CR7', img: 'http://lorempixel.com/400/200/sports', desc: 'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', age: 31, height: 7.5, country: 'Spain'},
            {name: 'CR7', img: 'http://lorempixel.com/400/200/sports', desc: 'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', age: 31, height: 7.5, country: 'Spain'},
            {name: 'CR7', img: 'http://lorempixel.com/400/200/sports', desc: 'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', age: 31, height: 7.5, country: 'Spain'},
            {name: 'CR7', img: 'http://lorempixel.com/400/200/sports', desc: 'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', age: 31, height: 7.5, country: 'Spain'},
            {name: 'CR7', img: 'http://lorempixel.com/400/200/sports', desc: 'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', age: 31, height: 7.5, country: 'Spain'},
            {name: 'CR7', img: 'http://lorempixel.com/400/200/sports', desc: 'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', age: 31, height: 7.5, country: 'Spain'},
            {name: 'CR7', img: 'http://lorempixel.com/400/200/sports', desc: 'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', age: 31, height: 7.5, country: 'Spain'},
            {name: 'CR7', img: 'http://lorempixel.com/400/200/sports', desc: 'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', age: 31, height: 7.5, country: 'Spain'},
            {name: 'CR7', img: 'http://lorempixel.com/400/200/sports', desc: 'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', age: 31, height: 7.5, country: 'Spain'},
            {name: 'CR7', img: 'http://lorempixel.com/400/200/sports', desc: 'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', age: 31, height: 7.5, country: 'Spain'},
            {name: 'CR7', img: 'http://lorempixel.com/400/200/sports', desc: 'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', age: 31, height: 7.5, country: 'Spain'},
            {name: 'CR7', img: 'http://lorempixel.com/400/200/sports', desc: 'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', age: 31, height: 7.5, country: 'Spain'},
            {name: 'CR7', img: 'http://lorempixel.com/400/200/sports', desc: 'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', age: 31, height: 7.5, country: 'Spain'},
            {name: 'CR7', img: 'http://lorempixel.com/400/200/sports', desc: 'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', age: 31, height: 7.5, country: 'Spain'},
            {name: 'CR7', img: 'http://lorempixel.com/400/200/sports', desc: 'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', age: 31, height: 7.5, country: 'Spain'},
            {name: 'CR7', img: 'http://lorempixel.com/400/200/sports', desc: 'is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', age: 31, height: 7.5, country: 'Spain'},
        ]
    }

    loadFood(){
        return Promise.resolve(this.food);
    }
    loadsport(){
        return Promise.resolve(this.sport);
    }

}