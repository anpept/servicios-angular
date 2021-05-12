import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandChildBComponent } from './grand-child-b.component';

describe('GrandChildBComponent', () => {
  let component: GrandChildBComponent;
  let fixture: ComponentFixture<GrandChildBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandChildBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandChildBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
