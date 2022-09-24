import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  SelectedRecipe: Recipe = {
    name: '',
    description: '',
    imagePath: '',
    indgredients: [],
  };
  constructor(private recipeservice: RecipeService) {}

  ngOnInit() {
    this.recipeservice.SelectedRecipe.subscribe((recipe: Recipe) => {
      this.SelectedRecipe = recipe;
    });
  }
  getRecipe(recipe: Recipe) {
    console.log(recipe);

    this.SelectedRecipe = recipe;
  }
}
