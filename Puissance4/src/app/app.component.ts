import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Play } from './States/game.state';
import { GameCheckService } from './Services/gameCheckService/game-check.service'

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

  columnFull(colIndex: number): boolean {
    return this.gameCheckService.columnFull(colIndex);
  }

  constructor(private store: Store, private gameCheckService: GameCheckService) {
  }
}
