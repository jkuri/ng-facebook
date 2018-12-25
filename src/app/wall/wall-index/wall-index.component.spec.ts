import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallIndexComponent } from './wall-index.component';

describe('WallIndexComponent', () => {
  let component: WallIndexComponent;
  let fixture: ComponentFixture<WallIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
