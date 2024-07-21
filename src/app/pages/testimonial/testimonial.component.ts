import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {
  contactNumber:string = `+91-96738xxxxx`;
  contactEmail:string = 'jesmartins10@gmail.com';
}
