import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { Observable } from "rxjs/Observable";

import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { EditionService } from './edition.service'
import { Edition } from './edition'

@Component({
  selector: 'edition-list',
  templateUrl: "./edition-list.component.html"
})
export class EditionListComponent implements OnInit {
  editions: Edition[];

  constructor(
    private router: Router,
    private editionService: EditionService
  ) { }

  ngOnInit(): void {
    this.editionService.getEditions()
      .then(editions => this.editions = editions)
    }
    
    goToDetail(edition:Edition) : void{
      let link= [ '/edicao', edition.number ];
      this.router.navigate(link)
    }
}
