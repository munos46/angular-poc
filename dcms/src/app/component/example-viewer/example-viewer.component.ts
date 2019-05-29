import { Component, OnInit, Input, HostBinding, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SourceFileService } from 'src/app/services/sourcefileservice';

@Component({
  selector: 'app-example-viewer',
  templateUrl: './example-viewer.component.html',
  styleUrls: ['./example-viewer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExampleViewerComponent implements OnInit {
  @HostBinding('attr.class') class = 'sb-example-viewer';

  constructor(private sourceFileService: SourceFileService) { }

  contentTab: Map<string, string> = new Map<string, string>();

  @Input() files: string[];

  @Input() location: string;

  @Input() title: string;

  ngOnInit() {
    for (const tabname of this.files) {
      this.sourceFileService.getSource(this.location, tabname)
        .subscribe(data => this.contentTab.set(tabname, data));
    }
  }

  _getClassColor(extension: string) {
    switch (extension) {
      case 'ts': {
        return 'language-js';
      }
      case 'scss': {
        return 'language-css';
      }
      default: {
        return 'language-' + extension;
      }
    }
  }
}
