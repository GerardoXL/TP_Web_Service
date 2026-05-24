import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextToSpeachComponent } from './text-to-speach.component';

describe('TextToSpeachComponent', () => {
  let component: TextToSpeachComponent;
  let fixture: ComponentFixture<TextToSpeachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextToSpeachComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextToSpeachComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
