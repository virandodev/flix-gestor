import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesListaComponent } from './series-lista.component';

describe('SeriesListaComponent', () => {
  let component: SeriesListaComponent;
  let fixture: ComponentFixture<SeriesListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
