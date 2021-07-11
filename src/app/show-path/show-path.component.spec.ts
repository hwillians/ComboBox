import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPathComponent } from './show-path.component';

describe('ShowPathComponent', () => {
  let component: ShowPathComponent;
  let fixture: ComponentFixture<ShowPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
