import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BaseModule } from './modules/base.module';
import { SbComponentsModule } from 'sb-components';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './page/home/home.component';
import { CarRentingComponent } from './page/car-renting/car-renting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientInformationComponent } from 'src/app/page/car-renting/components/client-information/client-information.component';
import { CarInformationComponent } from 'src/app/page/car-renting/components/car-information/car-information.component';
import { WelcomePageComponent } from './page/welcome-page/welcome-page.component';
import { ShowcaseComponent } from './page/showcase/showcase.component';
import { ExampleViewerComponent } from './component/example-viewer/example-viewer.component';
import { BasicEpComponent } from './component/component-example/m-expansion-panel/basic-ep/basic-ep.component';
import { MExpansionPanelComponent } from './page/showcase/m-expansion-panel/m-expansion-panel.component';
import { BasicFooterComponent } from './component/component-example/sb-footer/basic-footer/basic-footer.component';
import { SbFooterComponent } from './page/showcase/sb-footer/sb-footer.component';
import { BasicMessagesComponent } from './component/component-example/p-messages/basic-messages/basic-messages.component';
import { PMessagesComponent } from './page/showcase/p-messages/p-messages.component';
import { BrowserModule } from '@angular/platform-browser';
import { ClientComponent } from './page/client/client.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
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
        BrowserModule,
        BaseModule,
        SbComponentsModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it('should render footer', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('sb-footer').render);
  // });

  // it('should render footer logo inside footer', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('sb-footer sb-footer-logo').render);
  // });

  // it('should render footer links inside footer', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('sb-footer sb-footer-links').render);
  // });

});
