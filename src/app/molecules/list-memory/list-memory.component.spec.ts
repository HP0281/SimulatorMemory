import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMemoryComponent } from './list-memory.component';

describe('ListMemoryComponent', () => {
  let component: ListMemoryComponent;
  let fixture: ComponentFixture<ListMemoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMemoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
