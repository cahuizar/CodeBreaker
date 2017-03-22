import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncryptHeaderButtonsComponent } from './encrypt-header-buttons.component';

describe('EncryptHeaderButtonsComponent', () => {
  let component: EncryptHeaderButtonsComponent;
  let fixture: ComponentFixture<EncryptHeaderButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncryptHeaderButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncryptHeaderButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
