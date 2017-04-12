import { Component } from '@angular/core';
import { CommunicationService } from './communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CommunicationService]
})
export class AppComponent {
  title = 'app works!';
  constructor(private communicationService: CommunicationService) { }

  addCommunication(): void {
    //this.communicationService.addCommunication();
  }
}
