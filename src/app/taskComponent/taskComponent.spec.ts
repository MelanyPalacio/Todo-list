import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task } from './taskComponent';

describe('TaskComponent', () => {
  let component: Task;
  let fixture: ComponentFixture<Task>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});