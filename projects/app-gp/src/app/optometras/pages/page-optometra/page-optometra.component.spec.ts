import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOptometraComponent } from './page-optometra.component';

describe('PageOptometraComponent', () => {
  let component: PageOptometraComponent;
  let fixture: ComponentFixture<PageOptometraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageOptometraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOptometraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
