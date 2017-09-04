import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouterModule } from './app-router.module'

import { AppComponent } from './app.component';
import { EditionDetailComponent } from './edition-detail.component';

@NgModule({
  declarations: [
      AppComponent,
      EditionDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
