import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'

import { EditionService } from './edition.service'
import { Edition } from './edition'

@Component({
    selector: 'edition-detail',
    template : `
        <article *ngIf="edition != null">
            <header>
                <h1>#{{edition.number}} - {{edition.name}}</h1>
                <span class="date">{{edition.date | date : 'dd/MM/YYYY'}}</span>
            </header>
        </article>
    `
})
export class EditionDetailComponent implements OnInit {
    edition: Edition;

    constructor(
        private route : ActivatedRoute,
        private editionService : EditionService
    ){}

    ngOnInit () : void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.editionService.getEdition(+params.get('id')))
    }
}
