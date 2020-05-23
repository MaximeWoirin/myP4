import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Puissance4';
  isAuth = false;

  onClick(id: number) {
    alert(id);
  }

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    )
  }
  turnMachines() {
    alert("tout est allumé")
  }

}