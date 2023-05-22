import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private httpClient:HttpClient) {  }


  authenticate(requestBody :{email: string, password: string}):Observable<any>{

return this.httpClient.post('http://localhost:8080/api/user/login', requestBody);
  }

  setToken(token:string){
    localStorage.setItem('token', token);
  }
}
