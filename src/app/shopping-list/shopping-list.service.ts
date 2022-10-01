import { Subject } from 'rxjs';
import { Indgredient } from '../shared/indgredient.model';

export class ShoppingListService {
  indgredientschanged = new Subject<Indgredient[]>();
  SelectedItem = new Subject<number>();
  private indgredients: Indgredient[] = [
    new Indgredient('Chilli', 5),
    new Indgredient('Tomatoe', 10),
  ];

  getIndgredients() {
    return this.indgredients.slice();
  }

  getIndgredient(index:number) {
    return this.indgredients.slice()[index];
  }

  addIndgredient(Indgredient: Indgredient) {
    this.indgredients.push(Indgredient);
    this.indgredientschanged.next(this.indgredients.slice());
  }
  addIndgredients(Indgredients: Indgredient[]) {
    this.indgredients.push(...Indgredients);
    this.indgredientschanged.next(this.indgredients.slice());
  }

  updateIndgredient(index:number,Indgredient: Indgredient) {
    this.indgredients[index]=Indgredient;
    this.indgredientschanged.next(this.indgredients.slice());
  }

  deleteIndgredient(index:number) {
    this.indgredients.splice(index,1);
    this.indgredientschanged.next(this.indgredients.slice());
  }
}
