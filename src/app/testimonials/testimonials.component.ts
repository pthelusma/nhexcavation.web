import { Component, OnInit } from '@angular/core';
import { TestimonialsService } from '../testimonials.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
  providers: [TestimonialsService]
})
export class TestimonialsComponent implements OnInit {
  testimonials: any;

  constructor(private testimonialsService: TestimonialsService) { }

  ngOnInit() {
    this.getTestimonials();
  }

  getTestimonials(): void {
    this.testimonialsService.getTestimonials().then(testimonials => this.testimonials = testimonials);
  }

}
