import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() index: number = -1;
  @Input() recipe: Recipe = {
    name: '',
    description: '',
    imagePath: '',
    indgredients: [],
  };

  constructor() {}

  ngOnInit(): void {}
}
