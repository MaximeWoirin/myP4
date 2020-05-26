import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Play, InitGameGrid } from './States/game.state';
import { GameCheckService } from './Services/gameCheckService/game-check.service'
import { Observable } from 'rxjs';
import { GameState, GameStateModel } from './States/game.state'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Select(GameState) state$: Observable<any>;

  onClick(colIndex: number) {
    this.store.dispatch(new Play(colIndex));
    let lastCoinIndex: number = -1;
    this.state$.subscribe((data: GameStateModel) => lastCoinIndex = data.lastCoinPlaced);
    if (this.gameCheckService.win(lastCoinIndex)) {
      let winner: number = 0;
      this.state$.subscribe((data: GameStateModel) => {
        switch (data.player) {
          case 1:
            winner = 2;
            break;
          case 2:
            winner = 1;
            break;
        }
      });
      alert("Player " + winner + " won !!!");
      this.store.dispatch(new InitGameGrid());
    }
  }

  columnFull(colIndex: number): boolean {
    return this.gameCheckService.columnFull(colIndex);
  }

  constructor(private store: Store, private gameCheckService: GameCheckService) {
  }
}
