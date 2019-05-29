import { Component, HostBinding, ViewEncapsulation, Directive, HostListener } from '@angular/core';
import { Constant } from '../../constant/constant';

const sidebarSelector = 'sb-sidebar';
const sidebarToggleIconSelector = sidebarSelector + '-toggle-icon';
const sidebarOverlayContentSelector = sidebarSelector + '-overlay-content';

export class SidebarUtils {
  public static toggleMenu(): void {
    const sidebar = document.querySelector('.' + sidebarSelector);
    const layer = document.querySelector('.' + sidebarOverlayContentSelector);
    sidebar.classList.toggle('open');
    layer.classList.toggle('hidden');
  }
}

@Component({
  selector: sidebarSelector,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {
  @HostBinding(Constant.classAttr) class = sidebarSelector;
  @HostListener('click')
  public onClick(): void {
    if (document.querySelector('.' + sidebarSelector).classList.contains('open')) {
      SidebarUtils.toggleMenu();
    }
  }
}

@Directive({
  selector: 'sb-sidebar-logo, [sb-sidebar-logo], [sbSidebarLogo]'
})
export class SidebarLogoDirective {
  @HostBinding(Constant.classAttr) class = 'sb-sidebar-logo';
}

@Directive({
  selector: 'sb-sidebar-menu, [sb-sidebar-menu], [sbSidebarMenu]'
})
export class SidebarMenuDirective {
  @HostBinding(Constant.classAttr) class = 'sb-sidebar-menu';
}

@Component({
  selector: sidebarToggleIconSelector,
  templateUrl: './sidebar-toggle-icon.component.html',
  styleUrls: ['./sidebar-toggle-icon.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarToggleIconComponent {
  @HostBinding(Constant.classAttr) class = sidebarToggleIconSelector;

  public toggleMenu(): void {
    SidebarUtils.toggleMenu();
  }
}

@Component({
  selector: sidebarOverlayContentSelector,
  template: '',
  styleUrls: ['./sidebar-layer-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarOverlayContentComponent {
  @HostBinding(Constant.classAttr) class = sidebarOverlayContentSelector + ' hidden';
  @HostListener('click')
  public onClick(): void {
    SidebarUtils.toggleMenu();
  }
}
