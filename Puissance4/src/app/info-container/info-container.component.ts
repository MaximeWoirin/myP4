import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GameState, GameStateModel } from '../States/game.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-info-container',
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.scss'],
  animations:[  
  ]
})
export class InfoContainerComponent implements OnInit {

  message: String = "";
  @Select(GameState) state$: Observable<any>;

  constructor() { }

  ngOnInit(): void {
    this.state$.subscribe((data: GameStateModel) => {
      switch (data.player) {
        case 1:
          this.message = "Player 1 plays";
          break;
        case 2:
          this.message = "Player 2 plays";
          break;
      }
    });
  }

}
