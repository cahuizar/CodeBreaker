import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagramDecryptComponent } from './anagram-decrypt.component';

describe('AnagramDecryptComponent', () => {
  let component: AnagramDecryptComponent;
  let fixture: ComponentFixture<AnagramDecryptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnagramDecryptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnagramDecryptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
