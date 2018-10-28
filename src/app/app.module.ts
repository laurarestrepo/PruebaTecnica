import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VentaComponent } from './venta/venta.component';
import { GestionarProductoModule } from './gestionar-producto/gestionar-producto.module';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    VentaComponent
  ],
  imports: [  CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    GestionarProductoModule,
    BrowserModule,
    AppRoutingModule, 
    AccordionModule, 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
