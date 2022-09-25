import { EventEmitter, Injectable } from '@angular/core';
import { Indgredient } from '../shared/indgredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
@Injectable()
export class RecipeService {
  SelectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Chicken',
      'Chicken Wings',
      'https://assets.bonappetit.com/photos/57ad22671b334044149753ed/1:1/w_2560%2Cc_limit/BAS-BEST-HOT-WINGS.jpg',
      [new Indgredient('kebab', 100)]
    ),
    new Recipe(
      'Chicken',
      'Chicken Wings',
      'https://assets.bonappetit.com/photos/57ad22671b334044149753ed/1:1/w_2560%2Cc_limit/BAS-BEST-HOT-WINGS.jpg',
      []
    ),
  ];
  getRecipes() {
    return this.recipes.slice();
  }
  getrecipe(index: number) {
    return this.recipes.slice()[index];
  }
  constructor(private slservice: ShoppingListService) {}

  addIndgredientstoshoppinglist(indgredients: Indgredient[]) {
    this.slservice.addIndgredients(indgredients);
  }
}
