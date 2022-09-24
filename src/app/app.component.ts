import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Recipebook';
  loadedfeature: string = 'recipe';

  getFeature(selected: string) {
    console.log(selected);
    this.loadedfeature = selected;
  }
}
