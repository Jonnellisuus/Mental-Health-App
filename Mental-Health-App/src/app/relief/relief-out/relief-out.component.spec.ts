import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReliefOutComponent } from './relief-out.component';

describe('ReliefOutComponent', () => {
  let component: ReliefOutComponent;
  let fixture: ComponentFixture<ReliefOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReliefOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReliefOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
