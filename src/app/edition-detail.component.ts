import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'

import { EditionService } from './edition.service'
import { Edition } from './edition'

@Component({
  selector: 'edition-detail',
  templateUrl: "./edition-detail.component.html"
})
export class EditionDetailComponent implements OnInit {
  edition: Edition;

  constructor(
    private route: ActivatedRoute,
    private editionService: EditionService
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.editionService.getEdition(+params.get('id')))
      .subscribe(edition => this.edition = edition);
  }
}
