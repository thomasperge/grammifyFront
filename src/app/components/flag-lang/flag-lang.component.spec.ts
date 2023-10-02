import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagLangComponent } from './flag-lang.component';

describe('FlagLangComponent', () => {
  let component: FlagLangComponent;
  let fixture: ComponentFixture<FlagLangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlagLangComponent]
    });
    fixture = TestBed.createComponent(FlagLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
