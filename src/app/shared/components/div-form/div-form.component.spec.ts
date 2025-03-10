import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivFormComponent } from './div-form.component';

describe('DivFormComponent', () => {
  let component: DivFormComponent;
  let fixture: ComponentFixture<DivFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
