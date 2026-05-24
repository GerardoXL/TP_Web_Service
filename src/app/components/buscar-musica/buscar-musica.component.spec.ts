import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarMusicaComponent } from './buscar-musica.component';

describe('BuscarMusicaComponent', () => {
  let component: BuscarMusicaComponent;
  let fixture: ComponentFixture<BuscarMusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarMusicaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuscarMusicaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
