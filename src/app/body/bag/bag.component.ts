import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss']
})
export class BagComponent implements OnInit{
  product: any;
  checked: any;

  constructor() {}

  ngOnInit(): void {
  }
}
