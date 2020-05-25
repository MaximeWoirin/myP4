import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Play } from './Services/game.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Puissance4';

  onClick(colIndex: number) {
    this.store.dispatch(new Play(colIndex));
  }

  constructor(private store: Store) {
  }
}
