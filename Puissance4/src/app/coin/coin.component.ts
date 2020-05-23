import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {

  player: number;

  constructor() {
    this.player = 0;
  }

  setPlayer(player: number) {
    if (player > 0 || player < 3) {
      this.player = player
    }
  }

  ngOnInit(): void {
  }

}
