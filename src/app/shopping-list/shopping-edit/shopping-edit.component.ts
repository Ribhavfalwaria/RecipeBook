import { Component, OnInit } from '@angular/core';
import { Indgredient } from 'src/app/shared/indgredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  name: string = '';
  amount: string = '';

  constructor(private shoppinglistservice: ShoppingListService) {}

  onAddItem() {
    let indgredient = new Indgredient(this.name, Number(this.amount));
    console.log(this.name, this.amount);
    this.shoppinglistservice.addIndgredient(indgredient);
  }

  ngOnInit(): void {}
}
