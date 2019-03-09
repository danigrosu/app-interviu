import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BModule } from './b/b.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { from } from 'rxjs';
import { AService } from './a/a.service';
import { EditComponent } from './a/edit/edit.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    EditComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AService],
  bootstrap: [AppComponent]
})
export class AppModule { }
