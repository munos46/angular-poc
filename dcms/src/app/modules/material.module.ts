import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatIconRegistry,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatTabsModule
} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

const modules = [
    BrowserAnimationsModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatTabsModule
];

@NgModule({
    imports: [modules],
    exports: [modules]
})
export class MaterialModule {
    constructor(
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer
    ) {
        this.matIconRegistry.addSvgIcon('company-logo',
            this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/company-logo.svg'));
        this.matIconRegistry.addSvgIcon('company-logo-mini',
            this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/company-logo-mini.svg'));
        this.matIconRegistry.addSvgIcon('showcase-icon',
            this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/showcase.svg'));
        this.matIconRegistry.addSvgIcon('documentation-icon',
            this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/documentation.svg'));
    }
}

