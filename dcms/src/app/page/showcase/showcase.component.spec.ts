import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseComponent } from './showcase.component';
import { BaseModule } from 'src/app/modules/base.module';
import { SbComponentsModule } from 'projects/sb-components/src/public_api';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { CarRentingComponent } from '../car-renting/car-renting.component';
import { ClientInformationComponent } from '../car-renting/components/client-information/client-information.component';
import { CarInformationComponent } from '../car-renting/components/car-information/car-information.component';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';
import { ExampleViewerComponent } from 'src/app/component/example-viewer/example-viewer.component';
import { BasicEpComponent } from 'src/app/component/component-example/m-expansion-panel/basic-ep/basic-ep.component';
import { MExpansionPanelComponent } from './m-expansion-panel/m-expansion-panel.component';
import { BasicFooterComponent } from 'src/app/component/component-example/sb-footer/basic-footer/basic-footer.component';
import { SbFooterComponent } from './sb-footer/sb-footer.component';
import { BasicMessagesComponent } from 'src/app/component/component-example/p-messages/basic-messages/basic-messages.component';
import { PMessagesComponent } from './p-messages/p-messages.component';
import { ClientComponent } from '../client/client.component';

describe('ShowcaseComponent', () => {
  let component: ShowcaseComponent;
  let fixture: ComponentFixture<ShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        CarRentingComponent,
        ClientInformationComponent,
        CarInformationComponent,
        WelcomePageComponent,
        ShowcaseComponent,
        ExampleViewerComponent,
        BasicEpComponent,
        MExpansionPanelComponent,
        BasicFooterComponent,
        SbFooterComponent,
        BasicMessagesComponent,
        PMessagesComponent,
        ClientComponent
      ],
      imports: [
        BaseModule,
        SbComponentsModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
