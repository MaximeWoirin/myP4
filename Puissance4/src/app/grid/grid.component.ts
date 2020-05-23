import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  grid: Array<number>;

  constructor() {
    this.grid = new Array<number>();
    for (let i = 0; i < 42; i++) {
      this.grid.push(0);
    }
  }

  ngOnInit(): void {
  }

}
