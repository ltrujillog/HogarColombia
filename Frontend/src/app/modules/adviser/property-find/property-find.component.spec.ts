import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyFindComponent } from './property-find.component';

describe('PropertyFindComponent', () => {
  let component: PropertyFindComponent;
  let fixture: ComponentFixture<PropertyFindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyFindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
