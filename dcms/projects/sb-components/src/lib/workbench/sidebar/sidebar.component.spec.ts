import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SidebarComponent } from './sidebar.component';
import { SidebarToggleIconComponent } from './sidebar.component';
import { SidebarOverlayContentComponent } from './sidebar.component';

describe('SidebarComponent', () => {
    let comp: SidebarComponent;
    let fixture: ComponentFixture<SidebarComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ SidebarComponent, SidebarToggleIconComponent, SidebarOverlayContentComponent ],
            schemas: [ NO_ERRORS_SCHEMA ]
        });
        fixture = TestBed.createComponent(SidebarComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    it('class defaults to: sb-sidebar', () => {
        expect(comp.class).toEqual('sb-sidebar');
    });

});
describe('SidebarToggleIconComponent', () => {
    let comp: SidebarToggleIconComponent;
    let fixture: ComponentFixture<SidebarToggleIconComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ SidebarComponent, SidebarToggleIconComponent, SidebarOverlayContentComponent ],
            schemas: [ NO_ERRORS_SCHEMA ]
        });
        fixture = TestBed.createComponent(SidebarToggleIconComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    it('class defaults to: sb-sidebar-toggle-icon', () => {
        expect(comp.class).toEqual('sb-sidebar-toggle-icon');
    });
});
describe('SidebarLayerContentComponent', () => {
    let comp: SidebarOverlayContentComponent;
    let fixture: ComponentFixture<SidebarOverlayContentComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ SidebarComponent, SidebarToggleIconComponent, SidebarOverlayContentComponent ],
            schemas: [ NO_ERRORS_SCHEMA ]
        });
        fixture = TestBed.createComponent(SidebarOverlayContentComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    it('class defaults to: sb-sidebar-overlay-content hidden', () => {
        expect(comp.class).toEqual('sb-sidebar-overlay-content hidden');
    });
});
