import { Component, OnInit, TemplateRef  } from '@angular/core';
import { Client } from './_models/client.model';
import { Policy } from './_models/policy.model';
import { ClientService } from './_services/client.service';
import { PolicyService } from './_services/policy.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'newshore';
  headers!: Array<string>;
  clients!: Client[];
  policies!: Policy[];
  modalRef?: BsModalRef;
  clientPolicies: Policy[] = [];
  clientName!: string;
  loaded: boolean = false;

  constructor(private modalService: BsModalService, private clientService:ClientService, private policyService:PolicyService) { }
  openModal(template: TemplateRef<any>, clientId: string, clientName: string) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    let policyCollection: Policy[] = [];
    let count = 0;
    this.policies.forEach((policy, indi) => {
      if(policy.clientId === clientId) {
        policyCollection.push(policy);
        // console.log(indi);
        count++;
        // console.log(policy);
      }
    });
    this.clientName = clientName;
    this.clientPolicies = policyCollection;
    console.log(this.clientPolicies);
    // console.log(userId);
    // console.log(this.policies);
  }

  ngOnInit() {
    this.clientService.getClients().subscribe(
      response => {
        var firstData: any = Object.values(response)[0];
        
        this.policyService.getPolicies().subscribe(
          policyResponse => {
            
    this.loaded = true;
            this.policies = Object.values(policyResponse)[0];
            this.headers = Object.keys(firstData[0]);
            this.clients = Object.values(response)[0];
            console.log(this.clients)
            // this.policies.forEach((policy, index) => {
            //   for(let i = 0; i < clientCollection.length; i++) {
            //     if(clientCollection[i].id === policy.clientId) {
            //       console.log(clientCollection[i].name)
            //     }
            //   }
            //   // console.log(clientCollection.find(policy.clientId));
            // });
            // console.log(this.policies.find(this.policies[]))
            // console.log(clientCollection[i].name)
        
            // for(let i = 0; i < clientCollection.length; i++) {
            //   let policyCount = 0;
            //   this.policies.forEach((policy, index) => {
            //     // console.log(policy);
            //     if(clientCollection[i].id === policy.clientId) {
            //       // console.log(clientCollection[i].name)
            //       policyCount++;
            //     }
            //   });
              
            //   clientCollection[i].policyCount = policyCount;
            // }
            // this.clients = clientCollection;
            // console.log(clientCollection);
          }
        );
          
        
      }
    );
  }
  
}
