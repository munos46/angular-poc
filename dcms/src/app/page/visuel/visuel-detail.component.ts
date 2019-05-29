import { Component, HostBinding, OnInit } from '@angular/core';
import { Visuel } from 'src/app/domain/Visuel';
import { VisuelService } from 'src/app/services/visuel-service';
import { Message } from 'primeng/components/common/message';
import { ActivatedRoute } from '@angular/router';
import { RegroupementService } from 'src/app/services/reroupement-service';
import { Regroupement } from 'src/app/domain/regroupement';
import { SelectItem } from 'primeng/api';
import { FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-visuel-detail',
  templateUrl: './visuel-detail.component.html'
})

export class VisuelDetailComponent implements OnInit {
  @HostBinding('attr.class') class = 'app-car-renting';

  id: string;
  private sub: any;

  codeRegroupement: Regroupement;
  refExt: string;
  dateFinFab: Date = new Date();
  visuel: Visuel;
  codeRegId: string;
  msgsMainPage: Message[] = [];
  regroupementList: SelectItem[] = [];

  codeVisuel = new FormControl('', [Validators.required, Validators.maxLength(10)]);

  getErrorMessage() {
    return this.codeVisuel.hasError('required') ? 'You must enter a value' :
        this.codeVisuel.hasError('maxlength') ? 'Maximum size of visual code is 10' :
            '';
  }

  constructor(private visuelService: VisuelService, private route: ActivatedRoute, private regroupementService: RegroupementService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.visuelService.getVisuelById(this.id).subscribe(visuelResp => this.majVisuel(visuelResp));
      } else {
        this.regroupementService.getRegroupements().subscribe(regResp => this.majRegroupement(regResp));
      }
    });
  }

  majRegroupement(pRegList: Regroupement[]) {
    pRegList.forEach(e => {
      this.regroupementList.push({label: e.name, value: e});
      if (this.id && this.codeRegId === e.code) {
        this.codeRegroupement = e;
      }
    });
  }

  onSubmit(visuelForm: NgForm) {
    if (visuelForm.valid) {
      this.visuel = new Visuel(this.codeRegroupement.code, this.codeVisuel.value, this.dateFinFab, this.refExt);
      if (this.id) {
        this.visuel.id = this.id;
      }
      console.log(this.visuel);
      this.visuelService.postVisuel(this.visuel).
          subscribe(data => {this.creationSuccess()}, Error => {this.msgsMainPage.push({ severity: 'error', detail: 'Error creation' });})
    } else {
      this.msgsMainPage.push({ severity: 'error', detail: 'You have to modify the form to create a visual' });
    }
  }

  creationSuccess(): void {
    if (this.id) {
      this.msgsMainPage.push({ severity: 'info', detail: 'Visuel with code visuel \'' + this.codeVisuel + '\' modified' });
    } else {
      this.msgsMainPage.push({ severity: 'info', detail: 'Visuel with code visuel \'' + this.codeVisuel + '\' created' });
    }

    this.codeVisuel.setValue('');
    this.codeRegroupement = null;
    this.refExt = '';
    this.dateFinFab = null;
  }

  majVisuel(pVisuel: Visuel) {
    this.codeVisuel.setValue(pVisuel.codeVisuel);
    this.codeRegId = pVisuel.codeReg;
    this.refExt = pVisuel.refExtVisuelDist;
    this.dateFinFab = new Date(pVisuel.dateFinFabrication);
    this.id = pVisuel.id;
    this.regroupementService.getRegroupements().subscribe(regResp => this.majRegroupement(regResp));
  }
}
