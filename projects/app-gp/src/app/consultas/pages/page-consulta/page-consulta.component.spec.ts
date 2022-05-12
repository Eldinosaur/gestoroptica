import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConsultaComponent } from './page-consulta.component';

describe('PageConsultaComponent', () => {
  let component: PageConsultaComponent;
  let fixture: ComponentFixture<PageConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
