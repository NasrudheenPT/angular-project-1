import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatingNumComponent } from './formating-num.component';

describe('FormatingNumComponent', () => {
  let component: FormatingNumComponent;
  let fixture: ComponentFixture<FormatingNumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatingNumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatingNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
