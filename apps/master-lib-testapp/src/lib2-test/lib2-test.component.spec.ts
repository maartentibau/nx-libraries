import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2TestComponent } from './lib2-test.component';

describe('Lib2TestComponent', () => {
  let component: Lib2TestComponent;
  let fixture: ComponentFixture<Lib2TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib2TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
