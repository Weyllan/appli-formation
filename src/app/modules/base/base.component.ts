import { MenuComponent } from './menu/menu.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  @ViewChild('menu', { static: true }) menu: MenuComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.menu);
  }

  callEasterEgg() {
    console.log("Tu vois cette photo? Il s'agit de notre Rais à nous, René Cotti!");
    this.menu.makeJeanApprove();
  }

}
