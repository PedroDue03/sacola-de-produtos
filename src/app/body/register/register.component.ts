import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {QueryCepService} from "../utilit/cep-service/query-cep.service";
import {ApiService} from "../utilit/api-service/api.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formUser: FormGroup = this.fb.group({});
  formAddressUser: FormGroup = this.fb.group({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cepService: QueryCepService,
    private api: ApiService,
    private messageService: MessageService
  ) {
  }

  //inicializa o formulário de novo usuário e de endereço de usuário
  ngOnInit(): void {
    this.formUser = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });

    this.formAddressUser = this.fb.group({
      cep: ['', Validators.maxLength(8)],
      state: ['', [Validators.required]],
      complement: ['', Validators.required],
      houseNumber: ['', [Validators.required, Validators.minLength(1)]]
    })
  }

  //valida cep e preenche automaticamente os campos de endedeço
  cep() {
    const cep = this.formAddressUser.controls['cep'].value

    if (cep != null && cep !== '') {
      this.cepService.queryCep(cep).subscribe((enderecoCep: any) => {
        console.log(enderecoCep)

        if (enderecoCep?.erro) {
          this.formAddressUser.controls['cep'].setErrors({msg: 'O número de CEP não foi encontrado ou não existe.'})
        } else {
          const {localidade, uf, logradouro, bairro} = enderecoCep
          this.formAddressUser.controls['state'].setValue(`${localidade}, ${uf}`)
          this.formAddressUser.controls['complement'].setValue(`${logradouro}, ${bairro}`)
        }
      })
    }
  }

  register() {
    console.log(this.formAddressUser, this.formUser)
    if (this.formUser.status && this.formAddressUser.status == "VALID") {

      const newUser = this.formUser.value + this.formAddressUser.value;

      this.api.create(newUser).subscribe(res => {
        if (!res.hasOwnProperty('error')) {
          this.messageService.add({
            severity: 'success',
            summary: 'Cadastrado',
            detail: `${newUser.nome} foi cadastrado(a) com sucesso`
          });
          setTimeout(() => {
            this.redirectListProduct()
          }, 2000)
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Não cadastrado',
            detail: `Erro ao tentar cadastrar novo usuário`
          });
        }
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Usuário não cadastrado',
        detail: `Formulário apresenta campos inválidos`
      });
    }
  }

  redirectListProduct() {
    this.router.navigate(['list-product'])
  }
}
