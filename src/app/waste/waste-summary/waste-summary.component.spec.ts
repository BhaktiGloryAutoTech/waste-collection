import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasteSummaryComponent } from './waste-summary.component';

describe('WasteSummaryComponent', () => {
  let component: WasteSummaryComponent;
  let fixture: ComponentFixture<WasteSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasteSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WasteSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
