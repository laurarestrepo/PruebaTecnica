import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarProductoComponent } from './listar-producto/listar-producto.component';
import { AdicionarProductoComponent } from './adicionar-producto/adicionar-producto.component';

const routes: Routes = [{
    path: '', component: ListarProductoComponent
    , children: [

    ],
}, {
    path: "crearProducto", component: AdicionarProductoComponent
}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductoRoutingModule { }

