import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  SelectedRecipe: Recipe = { name: '', description: '', imagePath: '' };
  constructor() {}

  ngOnInit() {}
  getRecipe(recipe: Recipe) {
    console.log(recipe);

    this.SelectedRecipe = recipe;
  }
}
