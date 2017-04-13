import { Injectable } from '@angular/core';

@Injectable()
export class CommunicationService {

  constructor() { }

  addCommunication(request: any): Promise<any> {
    return Promise.resolve({});
  }

}
