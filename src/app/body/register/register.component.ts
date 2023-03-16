import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = this.fb.group({})

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
  }

  //inicializa o formulário
  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      birth: ['', Validators.required],
      cep: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      houseNumber: ['', Validators.required],
      complement: ['', Validators.required]
    })
  }

  register() {
    if (this.form.valid) {
      //   const newUser = {
      //     name: this.form.value.name,
      //     email: this.form.value.email,
      //     password: this.form.value.password,
      //     confirmPassword: this.form.value.confirmPassword,
      //     birth: this.form.value.birth,
      //     cep: this.form.value.cep,
      //     city: this.form.value.city,
      //     state: this.form.value.state,
      //     houseNumber: this.form.value.houseNumber,
      //     complement: this.form.value.complement,
      //   }
      //
      //   this.api.criar(newUser).subscribe(newUser => {
      //     if (!newUser) {
      //       console.log('Campos inválidados')
      //     } else {
      //       console.log('Usuário cadastrado com sucesso')
      //       this.router.navigate(['main'])
      //     }
      // }
      console.log(this.form.value)
      this.router.navigate(['list-product'])
    }
  }
}
