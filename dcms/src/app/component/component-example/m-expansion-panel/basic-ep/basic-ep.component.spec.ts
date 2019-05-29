import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicEpComponent } from './basic-ep.component';
import { MatExpansionModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BasicEpComponent', () => {
  let component: BasicEpComponent;
  let fixture: ComponentFixture<BasicEpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BasicEpComponent],
      imports: [BrowserAnimationsModule, MatExpansionModule, FormsModule, ReactiveFormsModule, MatInputModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicEpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
