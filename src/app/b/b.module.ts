import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BRoutingModule } from './b-routing.module';
import { BComponent } from './b/b.component';
import { B1Component } from './b1/b1.component';
import { B2Component } from './b2/b2.component';

@NgModule({
  declarations: [
    BComponent,
    B1Component,
    B2Component
  ],
  imports: [
    CommonModule,
    BRoutingModule
  ]
})
export class BModule { }
