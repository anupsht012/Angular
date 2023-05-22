import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AppServiceService} from "../../app-service.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private FormBuilder: FormBuilder, private AppServiceService: AppServiceService, private router: Router) {
  }
  ngOnInit() {
    this.loginForm = this.FormBuilder.group({
      email: new FormControl ('',[Validators.required]),
      password: new FormControl ('',[Validators.required]),
    })
    }

    onSubmitBtnClick() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

console.log('i am clicked')
      this.handleLogin({email:email, password:password});
    }

  handleLogin(p: { password: any; email: any }) {
      this.AppServiceService.authenticate(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.AppServiceService.setToken(res.token);
          this.router.navigateByUrl('/home')
        },
        error: (err) => {
          console.log(err)
        }
      })
    }

}
