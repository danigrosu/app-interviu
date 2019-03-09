import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AComponent } from './a/a.component';
import { EditComponent } from './a/edit/edit.component';

const routes: Routes = [
  { path: 'a/items', component: AComponent, children: [
    { path: '', redirectTo: 'a', pathMatch: 'full' },
    { path: 'edit', component: EditComponent },
    { path: 'edit/:id', component: EditComponent }
  ] },
  { path: 'b', loadChildren: './b/b.module#BModule'}, 
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
