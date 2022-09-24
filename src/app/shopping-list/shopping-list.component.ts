import { Component, OnInit } from '@angular/core';
import { Indgredient } from '../shared/indgredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  indgredients: Indgredient[] = [
    new Indgredient('Chilli', 5),
    new Indgredient('Tomatoe', 10),
  ];

  constructor() {}

  ngOnInit() {}

  IndgredientAdded(indgredient: Indgredient) {
    this.indgredients.push(indgredient);
  }
}
