import { Component, OnInit,ViewChild } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Indgredient } from 'src/app/shared/indgredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
editmode:boolean=false;
editeditem:Indgredient=new Indgredient('',-1);
ItemSubscription:Subscription=Subscription.EMPTY;
editeditemindex:number=Infinity;


@ViewChild('f',{static:false}) slform!: NgForm;

  constructor(private shoppinglistservice: ShoppingListService) {}

 

  ngOnInit(): void {
    this.ItemSubscription = this.shoppinglistservice.SelectedItem.subscribe((index:number)=>{
      console.log(index);
      this.editeditemindex=index;
      this.editeditem = this.shoppinglistservice.getIndgredient(index);
      this.slform.setValue({
        name:this.editeditem.name,
        amount:this.editeditem.amount
      })
      this.editmode = true;
      
    })
  }

  OnAddItem(form:NgForm) {
    let formvalues = form.value;
    let indgredient = new Indgredient(formvalues.name,formvalues.amount);
    if(this.editmode){
      this.shoppinglistservice.updateIndgredient(this.editeditemindex,indgredient);
    }
    else{

      console.log(indgredient);
      this.shoppinglistservice.addIndgredient(indgredient);
    }
    this.editmode=false;
    this.slform.reset()
  }

  onClear(){
    this.slform.reset();
    this.editmode=false;
  }

  onDelete(){
    this.shoppinglistservice.deleteIndgredient(this.editeditemindex);
    this.onClear();
  }
}
