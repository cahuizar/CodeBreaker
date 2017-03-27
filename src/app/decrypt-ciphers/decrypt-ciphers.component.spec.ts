import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecryptCiphersComponent } from './decrypt-ciphers.component';

describe('DecryptCiphersComponent', () => {
  let component: DecryptCiphersComponent;
  let fixture: ComponentFixture<DecryptCiphersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecryptCiphersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecryptCiphersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
