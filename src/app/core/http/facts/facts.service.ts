import { FactResults } from './../../../shared/models/fact-results.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FactsService {

  private factsApi: string = environment.factsApi;

  constructor(private readonly http: HttpClient) { }

  getRandomFacts(): Observable<FactResults>{
    return this.http.get<FactResults>(this.factsApi);
  }

  getPersoFacts(firstname: string, lastname: string): Observable<FactResults>{
    const url = this.factsApi + '?firstName=' + firstname + '&lastName=' + lastname;
    return this.http.get<FactResults>(url);
  }
}
