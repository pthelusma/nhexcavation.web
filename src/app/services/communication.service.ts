import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Communication } from '../models/communication';
import { environment } from '../../environments/environment';

@Injectable()
export class CommunicationService {

  private headers = new Headers({
    'Content-Type': 'application/json',
    'x-api-key': environment.COMMUNICATION_API_KEY
  });

  constructor(private http: Http) { }

  addCommunication(communication: Communication): Promise<any> {
    const url = environment.COMMUNICATION_API;

    return this.http
      .post(url, JSON.stringify(communication), { headers: this.headers })
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
