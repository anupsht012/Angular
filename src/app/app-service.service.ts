import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private httpClient:HttpClient) {  }

  login(email:string, password:string){
    return this.httpClient.post('http://localhost:3000/api/user/login', {email:email, password:password});

  }
}
