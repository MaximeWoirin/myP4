import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button'
import { GridComponent } from './grid/grid.component';
import { CoinComponent } from './coin/coin.component'
import { NgxsModule } from '@ngxs/store';
import { GridState } from './States/grid.state';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    CoinComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    NgxsModule.forRoot([GridState], {
      developmentMode: !environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
