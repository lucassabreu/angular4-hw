import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { EditionDetailComponent } from './edition-detail.component'

var routes : Routes = [
    { path: '', redirectTo: '/edicao/1', pathMatch: 'full' },
    // { path : '/', component: HomeComponent },
    { path : 'edicao/:id', component: EditionDetailComponent },
]

@NgModule ({
    imports : [ RouterModule.forRoot(routes) ],
    exports : [ RouterModule ]
})
export class AppRouterModule {}
