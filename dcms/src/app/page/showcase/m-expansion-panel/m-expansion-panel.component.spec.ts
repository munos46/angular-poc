import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MExpansionPanelComponent } from './m-expansion-panel.component';
import { ExampleViewerComponent } from 'src/app/component/example-viewer/example-viewer.component';
import { BasicEpComponent } from 'src/app/component/component-example/m-expansion-panel/basic-ep/basic-ep.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatExpansionModule, MatInputModule } from '@angular/material';
import { SbComponentsModule } from 'sb-components';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SourceFileService } from 'src/app/services/sourcefileservice';
import { SourceFileServiceMock } from 'src/app/services/sourcefileserviceMock';

describe('MExpensionPanelComponent', () => {
  let component: MExpansionPanelComponent;
  let fixture: ComponentFixture<MExpansionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MExpansionPanelComponent, ExampleViewerComponent, BasicEpComponent],
      imports: [
        BrowserAnimationsModule,
        SbComponentsModule,
        MatTabsModule,
        HttpClientModule,
        MatExpansionModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule],
        providers: [{provide: SourceFileService, useClass: SourceFileServiceMock}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
