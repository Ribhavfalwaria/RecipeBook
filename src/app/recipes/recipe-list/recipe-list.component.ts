import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Chicken',
      'Chicken Wings',
      'https://assets.bonappetit.com/photos/57ad22671b334044149753ed/1:1/w_2560%2Cc_limit/BAS-BEST-HOT-WINGS.jpg'
    ),
    new Recipe(
      'Chicken',
      'Chicken Wings',
      'https://assets.bonappetit.com/photos/57ad22671b334044149753ed/1:1/w_2560%2Cc_limit/BAS-BEST-HOT-WINGS.jpg'
    ),
  ];
  constructor() {}

  ngOnInit() {}
}
