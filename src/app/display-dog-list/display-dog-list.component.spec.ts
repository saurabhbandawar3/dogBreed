import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDogListComponent } from './display-dog-list.component';

describe('DisplayDogListComponent', () => {
  let component: DisplayDogListComponent;
  let fixture: ComponentFixture<DisplayDogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDogListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
