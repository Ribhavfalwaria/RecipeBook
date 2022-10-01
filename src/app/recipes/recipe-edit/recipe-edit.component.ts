import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Indgredient } from 'src/app/shared/indgredient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  id: number = -1;
  editmode: boolean = false;
  constructor(private route: ActivatedRoute,private router:Router, private recipeservice: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editmode = params['id'] != null;
      this.initForm()
      
    });
  }
  recipeform: FormGroup = new FormGroup({})

  Pattern: string = "^[1-9]+[0-9]*$";
  private initForm() {
    let RecipeName: string = ''
    let RecipeImagePath: string = ''
    let RecipeDescription: string = ''
    let Recipeindgredients = new FormArray<FormGroup>([]);
    if (this.editmode) {
      const recipe: Recipe = this.recipeservice.getrecipe(this.id);
      RecipeName = recipe.name
      RecipeImagePath = recipe.imagepath
      RecipeDescription = recipe.description
      if (recipe['indgredients']) {
        for (const indgredient of recipe.indgredients) {
          Recipeindgredients.push(new FormGroup({
            'name': new FormControl(indgredient.name, Validators.required),
            'amount': new FormControl(indgredient.amount, [Validators.required, Validators.pattern(this.Pattern)
          ])
          }))
        }

      }}
      this.recipeform = new FormGroup({
        'name': new FormControl(RecipeName, Validators.required),
        'description': new FormControl(RecipeDescription, Validators.required),
        'imagepath': new FormControl(RecipeImagePath, Validators.required),
        'indgredients': Recipeindgredients
      })
    

  }
  getControls() {
    return (this.recipeform.get('indgredients') as FormArray).controls;
  }
  AddIndgredient() {
    (this.recipeform.get('indgredients') as FormArray).push(new FormGroup({
      'name': new FormControl(null,Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern(this.Pattern)]) 
    }));
  }
// 
  OnSubmit() {
    // const newrecipe= new Recipe(this.recipeform.value['name'],this.recipeform.value['description'],this.recipeform.value['imagepath'],this.recipeform.value['indgredients'])
    if (this.editmode) {
      this.recipeservice.updateRecipe(this.id,this.recipeform.value);
    }
    else{
      console.log(this.recipeform);
      
      this.recipeservice.addRecipe(this.recipeform.value);
    }
    
    this.router.navigate(['../'],{relativeTo:this.route})

  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route})
  }

  onDeleteIndgredient(i:number){
    (this.recipeform.get('indgredients') as FormArray).removeAt(i)

  }
}
