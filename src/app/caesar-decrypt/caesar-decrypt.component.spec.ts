import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaesarDecryptComponent } from './caesar-decrypt.component';

describe('CaesarDecryptComponent', () => {
  let component: CaesarDecryptComponent;
  let fixture: ComponentFixture<CaesarDecryptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaesarDecryptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaesarDecryptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
