import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Indgredient } from 'src/app/shared/indgredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  constructor() {}
  name: string = '';
  amount: string = '';
  @Output() NewIndgredient = new EventEmitter<Indgredient>();

  ngOnInit() {}

  onAddItem() {
    let indgredient = new Indgredient(this.name, Number(this.amount));
    console.log(this.name, this.amount);

    this.NewIndgredient.emit(indgredient);
  }
}
