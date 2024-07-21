import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  title:string = `Contact Us`;
  subTitle:string = `Contact us today to learn more about how we can help make your event truly exceptional.`;
  contactNumber:string = `+91-96738XXXXX`;
  constructor() {}

  ngOnInit(): void {
   
  }

}
