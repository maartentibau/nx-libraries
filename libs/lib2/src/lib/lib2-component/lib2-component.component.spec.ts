import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2ComponentComponent } from './lib2-component.component';

describe('Lib2ComponentComponent', () => {
  let component: Lib2ComponentComponent;
  let fixture: ComponentFixture<Lib2ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib2ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
