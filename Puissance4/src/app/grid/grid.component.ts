import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { InitGameGrid } from '../Services/game.services';
import { GridState, GridStateModel } from '../States/grid.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  grid: Array<Number> = Array<Number>();
  @Select(GridState) state$: Observable<any>;

  constructor(private store: Store) {
    this.store.dispatch(new InitGameGrid());
  }

  ngOnInit(): void {
    this.state$.subscribe((data: GridStateModel) => this.grid = data.gridContent);
  }

}
