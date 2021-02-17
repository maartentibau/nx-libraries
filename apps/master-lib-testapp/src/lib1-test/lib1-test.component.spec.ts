import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1TestComponent } from './lib1-test.component';

describe('Lib1TestComponent', () => {
  let component: Lib1TestComponent;
  let fixture: ComponentFixture<Lib1TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib1TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
