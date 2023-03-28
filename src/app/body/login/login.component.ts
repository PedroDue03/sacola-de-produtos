import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = this.fb.group({})

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    if (this.form.valid) {
      //verifica no banco se 'user' existe e se sim, redireciona para 'list-products' ,senão invalida form.
      this.router.navigate(['list-products'])
    }
  }

  redirectToHome() {
    this.router.navigate(['/list-product'])
  }
}
