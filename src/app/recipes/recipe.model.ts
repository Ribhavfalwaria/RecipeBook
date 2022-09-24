import { Indgredient } from '../shared/indgredient.model';

export class Recipe {
  public name: string = '';
  public description: string = '';
  public imagePath: string = '';
  public indgredients: Indgredient[];
  constructor(
    name: string,
    desc: string,
    imagePath: string,
    indgredient: Indgredient[]
  ) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.indgredients = indgredient;
  }
}
