import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordDecryptComponent } from './keyword-decrypt.component';

describe('KeywordDecryptComponent', () => {
  let component: KeywordDecryptComponent;
  let fixture: ComponentFixture<KeywordDecryptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeywordDecryptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordDecryptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
