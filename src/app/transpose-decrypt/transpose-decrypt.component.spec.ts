import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransposeDecryptComponent } from './transpose-decrypt.component';

describe('TransposeDecryptComponent', () => {
  let component: TransposeDecryptComponent;
  let fixture: ComponentFixture<TransposeDecryptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransposeDecryptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransposeDecryptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
