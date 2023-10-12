import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTxnsComponent } from './child-txns.component';

describe('ChildTxnsComponent', () => {
  let component: ChildTxnsComponent;
  let fixture: ComponentFixture<ChildTxnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildTxnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTxnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
