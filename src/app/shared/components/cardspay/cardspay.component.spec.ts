import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardspayComponent } from './cardspay.component';

describe('CardspayComponent', () => {
  let component: CardspayComponent;
  let fixture: ComponentFixture<CardspayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardspayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardspayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
