import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnxietyInfoComponent } from './anxiety-info.component';

describe('AnxietyInfoComponent', () => {
  let component: AnxietyInfoComponent;
  let fixture: ComponentFixture<AnxietyInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnxietyInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnxietyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
