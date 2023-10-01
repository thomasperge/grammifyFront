import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReformulateSettingsComponent } from './reformulate-settings.component';

describe('ReformulateSettingsComponent', () => {
  let component: ReformulateSettingsComponent;
  let fixture: ComponentFixture<ReformulateSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReformulateSettingsComponent]
    });
    fixture = TestBed.createComponent(ReformulateSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
