import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Edition } from './edition';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class EditionService {

  private headers = new Headers({ 'Content-type': 'application/json' });

  constructor(private http: Http) { }

  getEdition(id: number): Promise<Edition> {
    return this.http.get(`/assets/data/edition.${id}.json`)
      .toPromise()
      .then(response => response.json() as Edition)
      .catch(this.handleError)
  }

  getEditions(): Promise<Edition[]> {
    return this.http.get(`/assets/data/editions.json`)
      .toPromise()
      .then(response => response.json().data as Edition[])
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
