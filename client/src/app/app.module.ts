import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
