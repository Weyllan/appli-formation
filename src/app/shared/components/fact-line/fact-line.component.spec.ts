import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactLineComponent } from './fact-line.component';

describe('FactLineComponent', () => {
  let component: FactLineComponent;
  let fixture: ComponentFixture<FactLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
