import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RememberVerseComponent } from './remember-verse.component';

describe('RememberVerseComponent', () => {
  let component: RememberVerseComponent;
  let fixture: ComponentFixture<RememberVerseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RememberVerseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RememberVerseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
