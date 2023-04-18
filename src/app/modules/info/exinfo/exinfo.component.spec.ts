import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExinfoComponent } from './exinfo.component';

describe('ExinfoComponent', () => {
  let component: ExinfoComponent;
  let fixture: ComponentFixture<ExinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
