import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form2pageComponent } from './form2page.component';

describe('Form2pageComponent', () => {
  let component: Form2pageComponent;
  let fixture: ComponentFixture<Form2pageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form2pageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form2pageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
