import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Indgredient } from '../shared/indgredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  indgredients: Indgredient[] = [];
  indgredientsupdated: Subscription = Subscription.EMPTY;

  constructor(private shoppinglistservice: ShoppingListService) {}

  ngOnInit() {
    this.indgredients = this.shoppinglistservice.getIndgredients();
    this.indgredientsupdated =
      this.shoppinglistservice.indgredientschanged.subscribe(
        (indgredients: Indgredient[]) => {
          this.indgredients = indgredients;
        }
      );
  }
  ngOnDestroy(): void {
    this.indgredientsupdated.unsubscribe();
  }
}
