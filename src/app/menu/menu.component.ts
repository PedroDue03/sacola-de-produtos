import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  avaliacao: any;
  formGroup: FormGroup = this.fb.group({});
  nodes: any;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {

  }
}
