import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdinfoComponent } from './adinfo.component';

describe('AdinfoComponent', () => {
  let component: AdinfoComponent;
  let fixture: ComponentFixture<AdinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
