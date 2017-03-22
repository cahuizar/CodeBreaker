import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermutationEncryptComponent } from './permutation-encrypt.component';

describe('PermutationEncryptComponent', () => {
  let component: PermutationEncryptComponent;
  let fixture: ComponentFixture<PermutationEncryptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermutationEncryptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermutationEncryptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
