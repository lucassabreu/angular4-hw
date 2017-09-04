import 'rxjs/add/operator/switchMap';

import { Component, Input, OnInit } from '@angular/core'

import { Edition } from './edition'

@Component({
  selector: 'edition',
  templateUrl: "./edition.component.html"
})
export class EditionComponent implements OnInit {
  @Input() edition: Edition;
  ngOnInit(): void {}
}
