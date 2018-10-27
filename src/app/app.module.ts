import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VentaComponent } from './venta/venta.component';

@NgModule({
  declarations: [
    AppComponent,
    VentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, AccordionModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
