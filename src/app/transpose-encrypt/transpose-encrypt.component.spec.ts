import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransposeEncryptComponent } from './transpose-encrypt.component';

describe('TransposeEncryptComponent', () => {
  let component: TransposeEncryptComponent;
  let fixture: ComponentFixture<TransposeEncryptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransposeEncryptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransposeEncryptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
