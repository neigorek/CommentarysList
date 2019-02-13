import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommAddComponent } from './comm-add.component';

describe('CommAddComponent', () => {
  let component: CommAddComponent;
  let fixture: ComponentFixture<CommAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
