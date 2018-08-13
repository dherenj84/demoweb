import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/homecomponent';
import { HomeService } from './components/home/homeservice';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
