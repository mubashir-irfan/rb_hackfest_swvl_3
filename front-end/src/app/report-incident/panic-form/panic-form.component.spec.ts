import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanicFormComponent } from './panic-form.component';

describe('PanicFormComponent', () => {
  let component: PanicFormComponent;
  let fixture: ComponentFixture<PanicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanicFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
