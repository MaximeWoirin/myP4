import { State, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';

export const GRID_SIZE: number = 42;
export const GRID_WIDTH: number = 7;

export class InitGameGrid {
    static readonly type = '[Game] InitCoinsInGrid'
    constructor() { }
}

export class Play {
    static readonly type = '[Game] PlayCoinInGrid'
    constructor(public colIndex: Number) { }
}

export interface GameStateModel {
    gridContent: Array<Number>;
    player: Number,
}

@State<GameStateModel>({
    name: 'grid',
    defaults: {
        gridContent: Array<Number>(),
        player: 1,
    }
})
@Injectable()
export class GameState {
    @Action(InitGameGrid)
    initGameGrid(ctx: StateContext<GameStateModel>) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            gridContent: new Array(GRID_SIZE).fill(0),
        })
    }
    @Action(Play)
    addCoin(ctx: StateContext<GameStateModel>, action: Play) {
        const state = ctx.getState();
        let colIndex: number = action.colIndex as number;
        let grid: Array<Number> = Array<Number>();
        let placed = [false, -1];
        let player = state.player;
        state.gridContent.forEach((player: number, index: number) => {
            // Le bas du tableau étant les cases aux indexes les plus hauts,
            // on ne soucie pas de savoir si un bon emplacement à été trouvé plus bas.
            // ainsi l'algo enregistre qu'il doit ajouter le jeton à la case vide troucée
            // la plus basse.
            if (index % GRID_WIDTH === colIndex && player === 0) {
                placed[1] = index;
                placed[0] = true;
            }
            grid.push(player);
        })
        if (placed[0]) {
            console.log("coins placed in tile index : " + placed[1]);
            grid[placed[1] as number] = player;
            switch (player) {
                case 1:
                    player = 2;
                    break;
                case 2:
                    player = 1;
                    break;
            }
        }
        ctx.setState({
            ...state,
            gridContent: grid,
            player: player,
        })
        console.log(grid);
    }
}