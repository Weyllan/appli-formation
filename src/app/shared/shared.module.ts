import { FactLineComponent } from './components/fact-line/fact-line.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    FactLineComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    FactLineComponent
  ]
})
export class SharedModule {}
