import { Component, OnInit } from '@angular/core';
import { GestionarProductoServicio } from '../servicio/gestionar-producto.service';
import { ProductoDTO } from '../clases/productoDTO';

@Component({
  selector: 'todoUno-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {

  listaProductos: ProductoDTO[];

  constructor(private gestionarProductoServicio: GestionarProductoServicio) { }

  ngOnInit() {
    this.consultarProductos();
  }

  public consultarProductos(): void {
    this.gestionarProductoServicio.consultarProductos().subscribe(listaProductos =>
      this.listaProductos = listaProductos, error => console.log(error));
  }
}
