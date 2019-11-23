import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProjetoComponent } from './form-projeto.component';

describe('FormProjetoComponent', () => {
  let component: FormProjetoComponent;
  let fixture: ComponentFixture<FormProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
