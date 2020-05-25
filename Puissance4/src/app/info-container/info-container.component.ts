import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-container',
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.scss']
})
export class InfoContainerComponent implements OnInit {

  @Input() message: String = "Player 1"

  constructor() { }

  ngOnInit(): void {
  }

}
