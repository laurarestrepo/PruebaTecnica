import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarProductoComponent } from './listar-producto/listar-producto.component';
import { AdicionarProductoComponent } from './adicionar-producto/adicionar-producto.component';
import { ProductoRoutingModule } from './gestionar-producto.routing';

@NgModule({
  imports: [
    CommonModule,ProductoRoutingModule
  ],
  declarations: [ListarProductoComponent, AdicionarProductoComponent]
})
export class GestionarProductoModule { }
