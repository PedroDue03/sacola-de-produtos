import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) { }

  redirectToBag() {
    this.router.navigate(['bag'])
  }
  redirectToRegister() {
    this.router.navigate(['register'])
  }
  redirectToLogin() {
    this.router.navigate(['login'])
  }
}
