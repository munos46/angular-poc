import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbFooterComponent } from './sb-footer.component';
import { ExampleViewerComponent } from 'src/app/component/example-viewer/example-viewer.component';
import { BasicFooterComponent } from 'src/app/component/component-example/sb-footer/basic-footer/basic-footer.component';
import { SbComponentsModule } from 'sb-components';
import { MatTabsModule, MatIconModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { SourceFileService } from 'src/app/services/sourcefileservice';
import { SourceFileServiceMock } from 'src/app/services/sourcefileserviceMock';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SbFooterComponent', () => {
  let component: SbFooterComponent;
  let fixture: ComponentFixture<SbFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbFooterComponent, ExampleViewerComponent, BasicFooterComponent],
      imports: [BrowserAnimationsModule, SbComponentsModule, MatTabsModule, MatIconModule, HttpClientModule],
      providers: [{provide: SourceFileService, useClass: SourceFileServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
