import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VentaComponent } from './venta/venta.component';

const routes: Routes = [{
  path: 'producto',
  loadChildren: './gestionar-producto/gestionar-producto.module#GestionarProductoModule'
},
{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
},
{
  path: "venta", component: VentaComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
