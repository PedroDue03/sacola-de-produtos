import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {QueryCepService} from "../utilit/cep-service/query-cep.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formUser: FormGroup = this.fb.group({})
  formAddressUser: FormGroup = this.fb.group({})

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cepService: QueryCepService
  ) {
  }

  //inicializa o formulário de novo usuário e de endereço de usuário
  ngOnInit(): void {
    this.formUser = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    })

    this.formAddressUser = this.fb.group({
      cep: ['', Validators.required],
      state: ['', Validators.required],
      houseNumber: ['', Validators.required],
      complement: ['', Validators.required]
    })
  }

  cep() {
    const cep = this.formAddressUser.controls['cep'].value

    if(cep != null && cep !== '') {
      this.cepService.queryCep(cep).subscribe( (enderecoCep:any)=> {
        console.log(enderecoCep)

        if(enderecoCep?.erro) {
          this.formAddressUser.controls['cep'].setErrors({msg:'O número de CEP não foi encontrado ou não existe.'})
        }else {
          const {localidade, logradouro, bairro, uf} = enderecoCep
          this.formAddressUser.controls['state'].setValue(`${localidade}, ${uf}`)
          this.formAddressUser.controls['complement'].setValue(`${logradouro}, ${bairro}`)
        }
      })
    }
  }

  register() {
    console.log(this.formAddressUser, this.formUser)
    if (this.formUser.valid && this.formAddressUser.valid) {
      //   const newUser = {
      //     name: this.formUser.value.name,
      //     email: this.formUser.value.email,
      //     password: this.formUser.value.password,
      //     confirmPassword: this.formUser.value.confirmPassword,

      //     cep-service: this.formAddressUser.value.cep-service,
      //     city: this.formAddressUser.value.city,
      //     state: this.formAddressUser.value.state,
      //     houseNumber: this.formAddressUser.value.houseNumber,
      //     complement: this.formAddressUser.value.complement,
      //   }
      //
      //   this.api-service.criar(newUser).subscribe(newUser => {
      //     if (!newUser) {
      //       console.log('Campos inválidados')
      //     } else {
      //       console.log('Usuário cadastrado com sucesso')
      //       this.router.navigate(['main'])
      //     }
      // }
      this.router.navigate(['list-product'])
    } else {
    console.log("form " + this.formUser.status)
    }
  }
}
