import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFooterComponent } from './basic-footer.component';
import { MatIconModule } from '@angular/material';
import { SbComponentsModule } from 'projects/sb-components/src/public_api';

describe('BasicFooterComponent', () => {
  let component: BasicFooterComponent;
  let fixture: ComponentFixture<BasicFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BasicFooterComponent],
      imports: [MatIconModule, SbComponentsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
