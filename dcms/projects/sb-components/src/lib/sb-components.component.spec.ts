import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbComponentsComponent } from './sb-components.component';

describe('SbComponentsComponent', () => {
  let component: SbComponentsComponent;
  let fixture: ComponentFixture<SbComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
