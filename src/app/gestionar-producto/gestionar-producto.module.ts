import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarProductoComponent } from './listar-producto/listar-producto.component';
import { AdicionarProductoComponent } from './adicionar-producto/adicionar-producto.component';
import { ProductoRoutingModule } from './gestionar-producto.routing';
import { DialogModule, CalendarModule, DropdownModule, 
  AutoCompleteModule, 
  DataTableModule} from 'primeng/primeng';  
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GestionarProductoServicio } from './servicio/gestionar-producto.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    //prime-ng
    DialogModule,
    CalendarModule,
    DropdownModule,
    AutoCompleteModule,
    DataTableModule,
    //fin prime-ng
    CommonModule, ProductoRoutingModule
  ],
   providers: [GestionarProductoServicio],
  declarations: [ListarProductoComponent, AdicionarProductoComponent]
})
export class GestionarProductoModule { }
