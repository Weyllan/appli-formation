import { MemesGeneratorComponent } from './memes-generator/memes-generator.component';
import { PersoFactsComponent } from './perso-facts/perso-facts.component';
import { SharedModule } from './../../shared/shared.module';
import { FactsListComponent } from './facts-list/facts-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseComponent } from './base.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    BaseComponent,
    MenuComponent,
    FactsListComponent,
    PersoFactsComponent,
    MemesGeneratorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [],
  providers: [],
  bootstrap: [BaseComponent]
})
export class BaseModule { }
