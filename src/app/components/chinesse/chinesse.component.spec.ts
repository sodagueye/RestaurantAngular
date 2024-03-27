import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinesseComponent } from './chinesse.component';

describe('ChinesseComponent', () => {
  let component: ChinesseComponent;
  let fixture: ComponentFixture<ChinesseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChinesseComponent]
    });
    fixture = TestBed.createComponent(ChinesseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
