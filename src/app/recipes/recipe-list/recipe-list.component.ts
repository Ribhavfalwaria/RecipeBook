import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit,OnDestroy {
  recipes: Recipe[] = [];
  updatedrecipes:Subscription=Subscription.EMPTY;
  constructor(
    private recipeservice: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.updatedrecipes= this.recipeservice.recipeschanged.subscribe((recipes:Recipe[])=>{this.recipes=recipes})

    this.recipes = this.recipeservice.getRecipes();
  }
  ngOnDestroy(): void {
    this.updatedrecipes.unsubscribe()
  }


  newRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
