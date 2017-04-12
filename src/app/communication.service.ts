import { Injectable } from '@angular/core';
import { CommunicationRequest } from './communication-request';
import { CommunicationResponse } from './communication-response';

@Injectable()
export class CommunicationService {

  constructor() { }

  addCommunication(request: CommunicationRequest): Promise<CommunicationResponse> {
    const response = new CommunicationResponse();

    response.something = 'Pierre';
    return Promise.resolve(response);
  }

}
