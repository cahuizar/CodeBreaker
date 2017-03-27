import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecryptHeaderButtonsComponent } from './decrypt-header-buttons.component';

describe('DecryptHeaderButtonsComponent', () => {
  let component: DecryptHeaderButtonsComponent;
  let fixture: ComponentFixture<DecryptHeaderButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecryptHeaderButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecryptHeaderButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
