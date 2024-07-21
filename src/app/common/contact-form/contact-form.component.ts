import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  enquiryPlaceHolder:string = `I would like to inquire about the birthday party decoration services offered by Just Deco. 

  Could you please provide more information on the following:
  - Availability for a birthday party on [desired date]
  - The types of themes and decorations available
  - Pricing details and packages
  - Any additional services or customization options

  Thank you!
  `;

  contactForm!: FormGroup;
  submitError = false;

  private googleFormUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfzQt8lxIBI4iITbaGqaJi41nag6ALW0rn-ySWbJVpzO2Wl7g/formResponse'; 
  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      enquiry: [this.enquiryPlaceHolder, Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }
  
    const formData = this.contactForm.value;
    const body = new URLSearchParams();
    body.set('entry.589739086', formData.name); // Replace with your Google Form entry IDs
    body.set('entry.55626465', formData.email);
    body.set('entry.1433355813', formData.phone);
    body.set('entry.787296179', formData.enquiry);

    this.http.post(this.googleFormUrl, body.toString(), {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }).subscribe(
      response => {
        console.log('Message sent successfully:', response);
        this.contactForm.reset();
        alert('Message sent successfully!');
      },
      error => {
        console.error('Error sending message:', error);
        this.submitError = true;
      }
    );
  }

}
