import { CommonModule } from '@angular/common';
import { PrimeModule } from './prime.module';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';


const exportModules = [
    CommonModule,
    MaterialModule,
    PrimeModule
];

const importModules = [
    exportModules,
];

const exportComponents = [

];

const declarations = [

];

@NgModule({
    declarations: [
        declarations,
        exportComponents
    ],
    imports: [
        importModules
    ],
    exports: [
        exportModules,
        exportComponents
    ],
    entryComponents: [
    ]
})

export class BaseModule { }
