import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1ComponentComponent } from './lib1-component.component';

describe('Lib1ComponentComponent', () => {
  let component: Lib1ComponentComponent;
  let fixture: ComponentFixture<Lib1ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib1ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
