import { Indgredient } from '../shared/indgredient.model';

export class Recipe {
  public name: string = '';
  public description: string = '';
  public imagepath: string = '';
  public indgredients: Indgredient[];
  constructor(
    name: string,
    desc: string,
    imagePath: string,
    indgredient: Indgredient[]
  ) {
    this.name = name;
    this.description = desc;
    this.imagepath = imagePath;
    this.indgredients = indgredient;
  }
}
