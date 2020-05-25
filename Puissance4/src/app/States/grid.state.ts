import { State, Action, StateContext } from '@ngxs/store';
import { InitGameGrid, Play } from '../Services/game.services'
import { Injectable } from '@angular/core';

export const GRID_SIZE: number = 42;
export const GRID_WIDTH: number = 7;

export interface GridStateModel {
    gridContent: Array<Number>;
    player: Number,
}

@State<GridStateModel>({
    name: 'grid',
    defaults: {
        gridContent: Array<Number>(),
        player: Math.floor(Math.random() * 2),
    }
})
@Injectable()
export class GridState {
    @Action(InitGameGrid)
    initGameGrid(ctx: StateContext<GridStateModel>) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            gridContent: new Array(GRID_SIZE).fill(0),
        })
    }
    @Action(Play)
    addCoin(ctx: StateContext<GridStateModel>, action: Play) {
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