import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiofmComponent } from './radiofm.component';

describe('RadiofmComponent', () => {
  let component: RadiofmComponent;
  let fixture: ComponentFixture<RadiofmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadiofmComponent]
    });
    fixture = TestBed.createComponent(RadiofmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
