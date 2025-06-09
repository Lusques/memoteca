import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddThoughtPageComponent } from './add-thought-page.component';

describe('AddThoughtPageComponent', () => {
  let component: AddThoughtPageComponent;
  let fixture: ComponentFixture<AddThoughtPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddThoughtPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddThoughtPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
