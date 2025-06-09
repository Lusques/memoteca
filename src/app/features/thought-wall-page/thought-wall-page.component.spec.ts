import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoughtWallPageComponent } from './thought-wall-page.component';

describe('ThoughtWallPageComponent', () => {
  let component: ThoughtWallPageComponent;
  let fixture: ComponentFixture<ThoughtWallPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThoughtWallPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThoughtWallPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
