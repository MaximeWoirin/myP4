import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';
import { GameState, GameStateModel } from '../../States/game.state';

@Injectable({
  providedIn: 'root'
})
export class GameCheckService {

  grid: Array<Number> = Array<Number>();
  @Select(GameState) state$: Observable<any>;

  constructor() { }

  columnFull(indexCol: number): boolean {
    this.state$.subscribe((data: GameStateModel) => this.grid = data.gridContent);
    if (this.grid[indexCol] === 0) {
      return false;
    }
    return true;
  }

}
