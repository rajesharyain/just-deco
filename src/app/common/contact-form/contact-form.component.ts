import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  alertMessage: string | null = null;
  alertType: string | null = null;
  enquiryPlaceHolder:string = `I would like to inquire about the birthday party decoration services offered by Jest Deco. 

  Could you please provide more information on the following:
  - Availability for a birthday party on [desired date]
  - The types of themes and decorations available
  - Pricing details and packages
  - Any additional services or customization options

  Thank you!`;

  contactForm!: FormGroup;
  submitError = false;
  submitMessage = "";

  private googleFormUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfzQt8lxIBI4iITbaGqaJi41nag6ALW0rn-ySWbJVpzO2Wl7g/formResponse'; 
  constructor(private fb: FormBuilder, private http: HttpClient, private contactService: ContactService) {}

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
  
/*     const formData = this.contactForm.value;
    const body = new URLSearchParams();
    body.set('entry.589739086', formData.name); 
    body.set('entry.55626465', formData.email);
    body.set('entry.1433355813', formData.phone);
    body.set('entry.787296179', formData.enquiry); */

    this.contactService.submitForm(this.contactForm.value).subscribe(
      response => {
        console.log('Message sent successfully:', response);
        this.submitMessage = response.message;
        this.showAlert(`${this.submitMessage}`, 'success');
        //this.contactForm.reset();
       // alert('Message sent successfully!');
      },
      error => {
        console.error('Error sending message:', error);
        this.showAlert('Error submitting form', 'danger');
        this.submitError = true;
      }
    )
    /* this.http.post(this.googleFormUrl, body.toString(), {
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
    );*/
  } 

  showAlert(message: string, type: string) {
    this.alertMessage = message;
    this.alertType = type;

    setTimeout(() => {
      this.alertMessage = null;
      this.alertType = null;
    }, 5000); // Alert disappears after 5 seconds
  }
  

}
