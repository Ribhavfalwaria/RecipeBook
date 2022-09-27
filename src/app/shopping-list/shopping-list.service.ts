import { Subject } from 'rxjs';
import { Indgredient } from '../shared/indgredient.model';

export class ShoppingListService {
  indgredientschanged = new Subject<Indgredient[]>();
  private indgredients: Indgredient[] = [
    new Indgredient('Chilli', 5),
    new Indgredient('Tomatoe', 10),
  ];

  getIndgredients() {
    return this.indgredients.slice();
  }

  addIndgredient(Indgredient: Indgredient) {
    this.indgredients.push(Indgredient);
    this.indgredientschanged.next(this.indgredients.slice());
  }
  addIndgredients(Indgredients: Indgredient[]) {
    this.indgredients.push(...Indgredients);
    this.indgredientschanged.next(this.indgredients.slice());
  }
}
