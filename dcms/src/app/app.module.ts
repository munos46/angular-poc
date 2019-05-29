import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MultiSelectModule} from 'primeng/multiselect';
import { AppComponent } from './app.component';
import { BaseModule } from './modules/base.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarService } from './services/carservice';
import { AppRoutingModule } from './app-routing.module';
import { SourceFileService } from './services/sourcefileservice';
import { HomeComponent } from './page/home/home.component';
import { CarRentingComponent } from './page/car-renting/car-renting.component';
import { ClientInformationComponent } from './page/car-renting/components/client-information/client-information.component';
import { CarInformationComponent } from './page/car-renting/components/car-information/car-information.component';
import { WelcomePageComponent } from './page/welcome-page/welcome-page.component';
import { ShowcaseComponent } from './page/showcase/showcase.component';
import { ExampleViewerComponent } from './component/example-viewer/example-viewer.component';
import { BasicEpComponent } from './component/component-example/m-expansion-panel/basic-ep/basic-ep.component';
import { MExpansionPanelComponent } from './page/showcase/m-expansion-panel/m-expansion-panel.component';
import { BasicFooterComponent } from './component/component-example/sb-footer/basic-footer/basic-footer.component';
import { SbFooterComponent } from './page/showcase/sb-footer/sb-footer.component';
import { BasicMessagesComponent } from './component/component-example/p-messages/basic-messages/basic-messages.component';
import { PMessagesComponent } from './page/showcase/p-messages/p-messages.component';
import { ClientComponent } from './page/client/client.component';
import { ClientService } from './services/client-service';
import { VisuelComponent } from './page/visuel/visuel.component';
import { VisuelService } from './services/visuel-service';
import { VisuelDetailComponent } from './page/visuel/visuel-detail.component';
import { VisuelListeComponent } from './page/visuel/visuel-liste.component';
import { ConfirmDialogModule, ConfirmationService, SliderModule, DropdownModule } from 'primeng/primeng';
import { RegroupementService } from './services/reroupement-service';
import { SbComponentsComponent } from 'projects/sb-components/src/lib/sb-components.component';
import { SbComponentsModule } from 'projects/sb-components/src/public_api';

@NgModule({
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
    ClientComponent,
    VisuelComponent,
    VisuelDetailComponent,
    VisuelListeComponent
  ],
  imports: [
    BrowserModule,
    BaseModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ConfirmDialogModule,
    MultiSelectModule,
    SliderModule,
    DropdownModule,
    SbComponentsModule
  ],
  providers: [CarService, SourceFileService, ClientService, VisuelService, ConfirmationService, RegroupementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
