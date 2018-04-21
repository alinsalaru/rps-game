import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameHistoryComponent } from './game-history.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material';

describe('GameHistoryComponent', () => {
  let component: GameHistoryComponent;
  let fixture: ComponentFixture<GameHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameHistoryComponent ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatExpansionModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
