import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service'
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm
  public isLoading = false

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  public login = ({email, password}) => {

    this.authService.login(email, password).toPromise()
        .then(res => console.log(res))
        .catch(e => console.log(e))
  }

}
