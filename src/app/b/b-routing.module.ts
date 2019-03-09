import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BComponent } from './b/b.component';
import { B1Component } from './b1/b1.component';
import { B2Component } from './b2/b2.component';

const routes: Routes = [
  { path: 'b', component: BComponent,
    children: [
      {
        path: 'b1',
        component: B1Component,
      },
      {
        path: 'b2',
        component: B2Component,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BRoutingModule { }
