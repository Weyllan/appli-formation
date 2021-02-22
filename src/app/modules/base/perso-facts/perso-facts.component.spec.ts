import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoFactsComponent } from './perso-facts.component';

describe('PersoFactsComponent', () => {
  let component: PersoFactsComponent;
  let fixture: ComponentFixture<PersoFactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersoFactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
