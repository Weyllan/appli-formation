import { FactResults } from './../../../shared/models/fact-results.model';
import { FactsService } from './../../../core/http/facts/facts.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-perso-facts',
  templateUrl: './perso-facts.component.html',
  styleUrls: ['./perso-facts.component.scss']
})
export class PersoFactsComponent implements OnInit {

  public apiResult = new FactResults();
  public persoForm: FormGroup;

  constructor(
    private readonly factsService: FactsService,
    private formBuilder: FormBuilder
  ) {
    this.persoForm = this.formBuilder.group({
      lastname: '',
      firstname: ''
    });
  }

  ngOnInit() {
  }

  getPersoFacts() {
    this.factsService.getPersoFacts(this.persoForm.value['firstname'], this.persoForm.value['lastname']).subscribe((results: FactResults) => {
      this.apiResult = results;
    });
  }

}
