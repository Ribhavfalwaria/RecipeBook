import { Component, OnInit } from '@angular/core';
import { Indgredient } from '../shared/indgredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  indgredients: Indgredient[] = [];

  constructor(private shoppinglistservice: ShoppingListService) {}

  ngOnInit() {
    this.indgredients = this.shoppinglistservice.getIndgredients();
    this.shoppinglistservice.indgredientschanged.subscribe(
      (indgredients: Indgredient[]) => {
        this.indgredients = indgredients;
      }
    );
  }
}
