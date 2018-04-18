import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayerGestureComponent } from './player-gesture/player-gesture.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerGestureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
