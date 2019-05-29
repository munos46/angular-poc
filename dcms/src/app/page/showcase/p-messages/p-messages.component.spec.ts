import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PMessagesComponent } from './p-messages.component';
import { ExampleViewerComponent } from 'src/app/component/example-viewer/example-viewer.component';
import { BasicMessagesComponent } from 'src/app/component/component-example/p-messages/basic-messages/basic-messages.component';
import { MatTabsModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { SbComponentsModule } from 'sb-components';
import { MessagesModule } from 'primeng/messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SourceFileService } from 'src/app/services/sourcefileservice';
import { SourceFileServiceMock } from 'src/app/services/sourcefileserviceMock';

describe('PMessagesComponent', () => {
  let component: PMessagesComponent;
  let fixture: ComponentFixture<PMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PMessagesComponent, ExampleViewerComponent, BasicMessagesComponent],
      imports: [
        BrowserAnimationsModule,
        SbComponentsModule,
        MatTabsModule,
        HttpClientModule,
        MessagesModule],
        providers: [{provide: SourceFileService, useClass: SourceFileServiceMock}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
