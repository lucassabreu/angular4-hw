import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'

import { EditionService } from './edition.service'
import { Edition } from './edition'

@Component({
    selector: 'home',
    template: `<edition [edition]="edition"></edition>`
})
export class HomeComponent implements OnInit {
    edition: Edition;

    constructor(
        private editionService: EditionService
    ) { }

    ngOnInit(): void {
        this.editionService.getLastEdition()
            .then(edition => this.edition = edition);
    }
}
