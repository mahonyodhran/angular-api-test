import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTodosComponent } from './get-todos.component';

describe('GetTodosComponent', () => {
  let component: GetTodosComponent;
  let fixture: ComponentFixture<GetTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
