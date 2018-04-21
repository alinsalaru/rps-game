import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatExpansionModule, MatSlideToggleModule, MatSliderModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PlayerGestureComponent } from './player-gesture/player-gesture.component';
import { SelectHandGestureComponent } from './player-gesture/select-hand-gesture/select-hand-gesture.component';
import { GameHistoryComponent } from './game-history/game-history.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerGestureComponent,
    SelectHandGestureComponent,
    GameHistoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
