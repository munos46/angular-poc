import { NgModule } from '@angular/core';
import { SbComponentsComponent } from './sb-components.component';
import { FooterComponent, FooterLogoDirective, FooterLinksDirective } from './workbench/footer/footer.component';
import { PageComponent } from './container/page/page.component';
import { CommonModule } from '@angular/common';
import {
  SidebarComponent,
  SidebarLogoDirective,
  SidebarMenuDirective,
  SidebarToggleIconComponent,
  SidebarOverlayContentComponent
} from './workbench/sidebar/sidebar.component';

const modules = [
  SbComponentsComponent,
  FooterComponent,
  FooterLogoDirective,
  FooterLinksDirective,
  PageComponent,
  SidebarComponent,
  SidebarLogoDirective,
  SidebarMenuDirective,
  SidebarToggleIconComponent,
  SidebarOverlayContentComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    modules
  ],
  exports: [
    modules
  ]
})
export class SbComponentsModule { }
