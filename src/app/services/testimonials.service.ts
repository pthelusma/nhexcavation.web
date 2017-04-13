import { Injectable } from '@angular/core';

@Injectable()
export class TestimonialsService {

  constructor() { }

  public getTestimonials(): Promise<any> {
    return Promise.resolve([
      {
        title: '',
        quote: 'This is a testimonial',
        customer: '',
        location: ''
      }
    ]);
  }

}
