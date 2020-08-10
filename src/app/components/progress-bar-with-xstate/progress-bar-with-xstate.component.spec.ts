import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarWithXstateComponent } from './progress-bar-with-xstate.component';

describe('ProgressBarWithXstateComponent', () => {
  let component: ProgressBarWithXstateComponent;
  let fixture: ComponentFixture<ProgressBarWithXstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarWithXstateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarWithXstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
