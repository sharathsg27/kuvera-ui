import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DetailFundComponent} from './detail-fund.component';

describe('DetailFundComponent', () => {
  let component: DetailFundComponent;
  let fixture: ComponentFixture<DetailFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailFundComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
