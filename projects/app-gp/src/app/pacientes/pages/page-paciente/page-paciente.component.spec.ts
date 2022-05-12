import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePacienteComponent } from './page-paciente.component';

describe('PagePacienteComponent', () => {
  let component: PagePacienteComponent;
  let fixture: ComponentFixture<PagePacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
