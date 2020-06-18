import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssGridExampleComponent } from './css-grid-example.component';

describe('CssGridExampleComponent', () => {
  let component: CssGridExampleComponent;
  let fixture: ComponentFixture<CssGridExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssGridExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssGridExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
