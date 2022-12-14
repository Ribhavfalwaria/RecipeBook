import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  id: number = -1;
  recipe: Recipe = {
    name: '',
    description: '',
    imagepath: '',
    indgredients: [],
  };
  constructor(
    private recipeservice: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];

      this.recipe = this.recipeservice.getrecipe(this.id);
    });
  }
  Addtoshoppinglist() {
    this.recipeservice.addIndgredientstoshoppinglist(this.recipe.indgredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
  
  onDeleteRecipe(){
    this.recipeservice.deleteRecipe(this.id);
    this.router.navigate(['/recipes'], { relativeTo: this.route });
  }
}
