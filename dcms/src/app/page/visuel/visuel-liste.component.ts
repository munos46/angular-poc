import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Visuel } from 'src/app/domain/Visuel';
import { VisuelService } from 'src/app/services/visuel-service';
import { ConfirmationService, Message } from 'primeng/api';
import { CodeRegSelected } from 'src/app/domain/code_reg_selected';

@Component({
  selector: 'app-visuel-liste',
  templateUrl: './visuel-liste.component.html'
})
export class VisuelListeComponent implements OnInit {
  @HostBinding('attr.class') class = 'app-car-renting';

  visuels: Visuel[] = [];
  cols: any[];
  messagesPage: Message[] = [];
  attachment: CodeRegSelected[] = [];
  item: CodeRegSelected;
  yearFilter: number;
  yearTimeout: any;

  constructor(private visuelService: VisuelService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.getVisuels();

    this.cols = [
      { field: 'codeVisuel', header: 'Visual Code' },
      { field: 'codeReg', header: 'Attachment' },
      { field: 'refExtVisuelDist', header: 'External referance of visual code' },
      { field: 'dateFinFabrication', header: 'End of production date', type: 'date' }
    ];
  }

  getVisuels(): void {
    this.visuelService.getVisuels()
    .subscribe(visuelResp => this.majVisuels(visuelResp));
  }

  majVisuels(pVisuels: Visuel[]) {
    this.visuels = pVisuels;
    pVisuels.forEach(element => {
      if (!this.attachment.some(e => e.label === element.codeReg)) {
        this.item = new CodeRegSelected(element.codeReg, element.codeReg);
        this.attachment.push(this.item);
      }
    });
  }

  confirm(pVisuel: Visuel) {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to delete this visuel ?',
        accept: () => {
          this.visuelService.deleteViuelById(pVisuel.id).subscribe(() => this.deleteObject(pVisuel));
        }
    });
  }

  deleteObject(pVisuel: Visuel) {
    this.messagesPage.push({ severity: 'info', detail: 'Visuel with code visuel \'' + pVisuel.codeVisuel + '\' deleted' })
    const index: number = this.visuels.indexOf(pVisuel);
    if (index !== -1) {
        this.visuels.splice(index, 1);
    }
  }

  onYearChange(event, dt) {
    if (this.yearTimeout) {
        clearTimeout(this.yearTimeout);
    }

    this.yearTimeout = setTimeout(() => {
      let dateUt = new Date(event.value, 1, 1, 0, 0, 0, 0);
      dt.filter(dateUt.toISOString(), 'dateFinFabrication', 'gt');
    }, 250);
  }
}
