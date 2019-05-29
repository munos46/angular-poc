import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleViewerComponent } from './example-viewer.component';
import { MatIconModule, MatTabsModule } from '@angular/material';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { HttpClientModule } from '@angular/common/http';
import { SourceFileService } from 'src/app/services/sourcefileservice';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SourceFileServiceMock } from 'src/app/services/sourcefileserviceMock';

describe('ExampleViewerComponent', () => {
  let component: ExampleViewerComponent;
  let fixture: ComponentFixture<ExampleViewerComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ ExampleViewerComponent ],
      imports: [BrowserAnimationsModule, MatTabsModule, MatIconModule, CodeHighlighterModule, HttpClientModule],
      providers: [{provide: SourceFileService, useClass: SourceFileServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleViewerComponent);
    component = fixture.componentInstance;
    component.files = ['ts', 'scss'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
