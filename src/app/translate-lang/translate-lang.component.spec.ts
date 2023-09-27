import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateLangComponent } from './translate-lang.component';

describe('TranslateLangComponent', () => {
  let component: TranslateLangComponent;
  let fixture: ComponentFixture<TranslateLangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranslateLangComponent]
    });
    fixture = TestBed.createComponent(TranslateLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
