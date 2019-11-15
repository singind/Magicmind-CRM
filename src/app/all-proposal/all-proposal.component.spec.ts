import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProposalComponent } from './all-proposal.component';

describe('AllProposalComponent', () => {
  let component: AllProposalComponent;
  let fixture: ComponentFixture<AllProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
