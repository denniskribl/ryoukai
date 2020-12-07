import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FlippableCardComponent } from './flippable-card.component';

describe('CardComponent', () => {
  let component: FlippableCardComponent;
  let fixture: ComponentFixture<FlippableCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlippableCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlippableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
