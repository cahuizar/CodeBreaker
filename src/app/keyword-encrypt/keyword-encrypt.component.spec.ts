import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordEncryptComponent } from './keyword-encrypt.component';

describe('KeywordEncryptComponent', () => {
  let component: KeywordEncryptComponent;
  let fixture: ComponentFixture<KeywordEncryptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeywordEncryptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordEncryptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
