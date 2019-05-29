import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import { MessagesModule } from 'primeng/messages';

const modules = [
    TableModule,
    MessagesModule,
    CodeHighlighterModule
];

@NgModule({
    imports: [modules],
    exports: [modules],
})
export class PrimeModule {
}
