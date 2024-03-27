import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatsenegalaisComponent } from './platsenegalais.component';

describe('PlatsenegalaisComponent', () => {
  let component: PlatsenegalaisComponent;
  let fixture: ComponentFixture<PlatsenegalaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatsenegalaisComponent]
    });
    fixture = TestBed.createComponent(PlatsenegalaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
