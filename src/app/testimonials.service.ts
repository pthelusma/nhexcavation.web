import { Injectable } from '@angular/core';

@Injectable()
export class TestimonialsService {

  constructor() { }

  public getTestimonials(): Promise<any> {
    return Promise.resolve([
      {
        quote: 'This is a testimonial',
      }
    ]);
  }

}
