import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnSuggestionComponent } from './own-suggestion.component';

describe('OwnSuggestionComponent', () => {
  let component: OwnSuggestionComponent;
  let fixture: ComponentFixture<OwnSuggestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnSuggestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
