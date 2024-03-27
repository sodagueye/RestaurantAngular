import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JusnaturelComponent } from './jusnaturel.component';

describe('JusnaturelComponent', () => {
  let component: JusnaturelComponent;
  let fixture: ComponentFixture<JusnaturelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JusnaturelComponent]
    });
    fixture = TestBed.createComponent(JusnaturelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
