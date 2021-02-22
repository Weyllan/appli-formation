import { FactResults } from './../../../shared/models/fact-results.model';
import { FactsService } from './../../../core/http/facts/facts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facts-list',
  templateUrl: './facts-list.component.html',
  styleUrls: ['./facts-list.component.scss']
})
export class FactsListComponent implements OnInit {

  public apiResult = new FactResults();

  constructor(private readonly factsService: FactsService) { }

  ngOnInit() {
  }

  getFacts() {
    this.factsService.getRandomFacts().subscribe((results: FactResults) => {
      this.apiResult = results;
    });
  }

}
