import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe = {
    name: '',
    description: '',
    imagePath: '',
    indgredients: [],
  };
  constructor(private recipeservice: RecipeService) {}

  ngOnInit() {}
  Addtoshoppinglist() {
    this.recipeservice.addIndgredientstoshoppinglist(this.recipe.indgredients);
  }
}
