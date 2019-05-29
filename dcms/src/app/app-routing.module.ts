import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { CarRentingComponent } from './page/car-renting/car-renting.component';
import { WelcomePageComponent } from './page/welcome-page/welcome-page.component';
import { ShowcaseComponent } from './page/showcase/showcase.component';
import { MExpansionPanelComponent } from './page/showcase/m-expansion-panel/m-expansion-panel.component';
import { SbFooterComponent } from './page/showcase/sb-footer/sb-footer.component';
import { PMessagesComponent } from './page/showcase/p-messages/p-messages.component';
import { ClientComponent } from './page/client/client.component';
import { VisuelComponent } from './page/visuel/visuel.component';
import { VisuelDetailComponent } from './page/visuel/visuel-detail.component';
import { VisuelListeComponent } from './page/visuel/visuel-liste.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome-page', pathMatch: 'full' },
  { path: 'welcome-page', component: WelcomePageComponent },
  {
    path: 'showcase', component: ShowcaseComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'expansion-panel', component: MExpansionPanelComponent },
      { path: 'messages', component: PMessagesComponent },
      { path: 'footer', component: SbFooterComponent },
      { path: 'car-renting', component: CarRentingComponent },
      { path: 'client', component: ClientComponent },
      { path: 'visuel', component: VisuelComponent, children: [
          { path: 'detail', component: VisuelDetailComponent},
          { path: 'detail/:id', component: VisuelDetailComponent},
          { path: 'liste', component: VisuelListeComponent},
        ] },
    ]
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
