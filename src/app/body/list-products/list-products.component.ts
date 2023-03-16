import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
  constructor(private router: Router) {
  }

  redireciona() {
  this.router.navigate(['register'])
  }
}
