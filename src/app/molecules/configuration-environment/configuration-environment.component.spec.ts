import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationEnvironmentComponent } from './configuration-environment.component';

describe('ConfigurationEnvironmentComponent', () => {
  let component: ConfigurationEnvironmentComponent;
  let fixture: ComponentFixture<ConfigurationEnvironmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurationEnvironmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
