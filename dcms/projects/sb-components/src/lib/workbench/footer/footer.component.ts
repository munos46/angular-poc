import { Component, Directive, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'sb-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent {
  @HostBinding('attr.class') class = 'sb-footer';
}

@Directive({
  selector: 'sb-footer-logo, [sb-footer-logo], [sbFooterLogo]'
})
export class FooterLogoDirective {
  @HostBinding('attr.class') class = 'sb-footer-logo';
}

@Directive({
  selector: 'sb-footer-links, [sb-footer-links], [sbFooterLinks]'
})
export class FooterLinksDirective {
  @HostBinding('attr.class') class = 'sb-footer-links';
}

