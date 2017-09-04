import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'

import { EditionService } from './edition.service'
import { Edition } from './edition'

@Component({
  selector: 'edition-list',
  templateUrl: "./edition-list.component.html"
})
export class EditionListComponent implements OnInit {
  editions: Edition[];

  constructor(
    private route: ActivatedRoute,
    private editionService: EditionService
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.editionService.getEditions())
      .subscribe(editions => this.editions = editions);
  }
}
