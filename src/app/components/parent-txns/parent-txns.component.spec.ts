import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTxnsComponent } from './parent-txns.component';

describe('ParentTxnsComponent', () => {
  let component: ParentTxnsComponent;
  let fixture: ComponentFixture<ParentTxnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentTxnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTxnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
