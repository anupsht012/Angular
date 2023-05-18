import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {AppServiceService} from "./app-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'everything';

  constructor(private appService:AppServiceService){}

  formFields = {
    email:'',
    password:''
  }

  onFormSubmit(myForm:NgForm){
    const email = myForm.value.email;
    const password = myForm.value.password;

this.appService.login(email, password).subscribe({
  next: (res) => {
    console.log(res);
  },
  error: (err) => {
    console.log(err)
  }
})
    // console.log(myForm);

  }
}
