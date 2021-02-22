import { MemesGeneratorComponent } from './memes-generator/memes-generator.component';
import { PersoFactsComponent } from './perso-facts/perso-facts.component';
import { FactsListComponent } from './facts-list/facts-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseModule } from './base.module';
import { BaseComponent } from './base.component';


const routes: Routes = [{
  path: '',
  component: BaseComponent,
  children: [
    {
      path: 'facts',
      component: FactsListComponent
    },
    {
      path: 'perso',
      component: PersoFactsComponent
    },
    {
      path: 'memes',
      component: MemesGeneratorComponent
    },
    {
      path: '',
      redirectTo: 'facts'
    }
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    BaseModule
  ],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
