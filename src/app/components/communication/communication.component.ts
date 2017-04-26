import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';
import { Communication } from '../../models/communication';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css'],
  providers: [CommunicationService]
})
export class CommunicationComponent implements OnInit {

  model = new Communication(null, null, null, null, '-1', '-1', null, null);

  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
  }

  addCommunication(communication: Communication): void {
    communication.CreateDate = new Date();

    this.communicationService.addCommunication(communication).then((result) => {
      console.log(result);
    });
  }

}
