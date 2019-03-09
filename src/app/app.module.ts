import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BModule } from './b/b.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
