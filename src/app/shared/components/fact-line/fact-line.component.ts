import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fact-line',
  templateUrl: './fact-line.component.html',
  styleUrls: ['./fact-line.component.scss']
})
export class FactLineComponent implements OnInit {

  @Input() numFact: number;
  @Input() factContent: string;

  constructor() { }

  ngOnInit() {
  }

}
