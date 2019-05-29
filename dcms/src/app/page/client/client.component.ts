import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Message } from 'primeng/components/common/message';
import { Client } from 'src/app/domain/Client';
import { ClientService } from 'src/app/services/client-service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html'
})
export class ClientComponent implements OnInit {
  @HostBinding('attr.class') class = 'app-car-renting';

  title = 'sbng';
  expendedSearch = false;
  disabledSearch = true;
  affButton = false;
  msgsMainPage: Message[] = [];
  msgsSearchResults: Message[] = [];

  clients: Client[] = [];
  cols: any[];

  @Input() firstName: string;

  clientSelected: Client;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.msgsMainPage.push({
      severity: 'warn',
      detail: 'This application is a demo. The filters are not working but you can click on search button to display the table.'
    });

    this.getClients();

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'firstname', header: 'FirstName' },
      { field: 'lastname', header: 'LastName' },
      { field: 'birthdate', header: 'Birthdate' }
    ];
  }

  getClients(): void {
    this.clientService.getClients()
    .subscribe(clientsResp => this.clients = clientsResp);
  }

  getClientsFirstName(pFirstName: string): void {
    this.clientService.getClientsByFirstName(pFirstName)
    .subscribe(clientsResp => {this.clients = []; this.clients.push(clientsResp); });
  }

  update(pFirstName: string) {
    this.firstName = pFirstName;
  }

  triggerSearch() {

    // Recherche par firstname si le firstname est renseigné
    if (this.firstName) {
      this.getClientsFirstName(this.firstName);
    } else {
      this.getClients();
    }

    this.expendedSearch = true;
    this.disabledSearch = false;

    this.msgsSearchResults = [];
    this.msgsSearchResults.push({ severity: 'warn', detail: 'The datatable generated is based on an API' });
  }

  aff (client: Client): void {
    client.affButton = true;
  }

  nonAff (client: Client): void {
    client.affButton = false;
  }
}
