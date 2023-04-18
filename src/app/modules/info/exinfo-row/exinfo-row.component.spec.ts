import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExinfoRowComponent } from './exinfo-row.component';

describe('ExinfoRowComponent', () => {
  let component: ExinfoRowComponent;
  let fixture: ComponentFixture<ExinfoRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExinfoRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExinfoRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
