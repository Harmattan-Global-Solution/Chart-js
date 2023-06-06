import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneChartComponent } from './ligne-chart.component';

describe('LigneChartComponent', () => {
  let component: LigneChartComponent;
  let fixture: ComponentFixture<LigneChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LigneChartComponent]
    });
    fixture = TestBed.createComponent(LigneChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
