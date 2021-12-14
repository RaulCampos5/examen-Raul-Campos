import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisitorComponent } from './visitor/visitor.component';
import { VisitorModule } from './visitor/visitor.module';


@NgModule({
  declarations: [
    AppComponent,
 /*    HomeScreenComponent,
    NavbarComponent, */
    //VisitorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VisitorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
