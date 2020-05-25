import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';
import { GameState, GameStateModel, GRID_HEIGHT, GRID_WIDTH, GRID_SIZE } from '../../States/game.state';

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

  //only have to check around last coin placed
  win(lastCoinIndex: number): boolean {
    this.state$.subscribe((data: GameStateModel) => this.grid = data.gridContent);
    if (this.verticalWin(lastCoinIndex) ||
      this.horizontalWin(lastCoinIndex) ||
      this.slashWin(lastCoinIndex) ||
      this.backSlashWin(lastCoinIndex))
      return true;

    return false;
  }

  verticalWin(lastCoinIndex: number): boolean {
    // There may only be win combinaison above last coin placed
    if (Math.floor(lastCoinIndex / GRID_WIDTH) < 3) {
      // If the last coin Placed is in a lower row than 3 there can't be connect 4
      if (this.grid[lastCoinIndex] === this.grid[lastCoinIndex + GRID_WIDTH] &&
        this.grid[lastCoinIndex] === this.grid[lastCoinIndex + (2 * GRID_WIDTH)] &&
        this.grid[lastCoinIndex] === this.grid[lastCoinIndex + (3 * GRID_WIDTH)])
        return true;
    }
    return false;
  }

  horizontalWin(lastCoinIndex: number): boolean {
    const rowOffset: number = Math.floor(lastCoinIndex / GRID_WIDTH) * GRID_WIDTH;

    let minCol: number = (lastCoinIndex - 3 < rowOffset) ? (rowOffset) : (lastCoinIndex - 3);
    const maxCol: number = (lastCoinIndex + 3 > rowOffset + GRID_WIDTH - 1) ? (rowOffset + GRID_WIDTH - 1) : (lastCoinIndex + 3);
    while (minCol <= lastCoinIndex && minCol + 3 <= maxCol) {
      if (this.grid[minCol] === this.grid[minCol + 1] &&
        this.grid[minCol] === this.grid[minCol + 2] &&
        this.grid[minCol] === this.grid[minCol + 3])
        return true;
      minCol++;
    }
    return false;
  }

  slashWin(lastCoinIndex: number): boolean {
    let win: boolean = false;

    return win;
  }
  backSlashWin(lastCoinIndex: number): boolean {
    let win: boolean = false;

    return win;
  }


}
