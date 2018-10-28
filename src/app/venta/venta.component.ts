import { Component, OnInit } from '@angular/core';
import { EntradaSalidaDTO } from '../clases/EntradaSalidaDTO';
import { VentaServicio } from '../servicios/venta.service';
import { ProductoDTO } from '../gestionar-producto/clases/productoDTO';
import { GestionarProductoServicio } from '../gestionar-producto/servicio/gestionar-producto.service';

@Component({
  selector: 'todoUno-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  public venta: EntradaSalidaDTO;
  public listaProductos: ProductoDTO[];

  constructor(private ventaServicio: VentaServicio, private gestionarProductoServicio: GestionarProductoServicio) { }

  ngOnInit() {
    this.venta = new EntradaSalidaDTO();
    this.venta.tipo = true;
    this.venta.fecha = new Date();
    //this.consultarProductos();
  }

  public adicionarVenta(): void {
    if (this.venta.producto.stock === 0) {
      console.error("No se permite realizar operaciones con el producto seleccionado");
      return;
    }
    this.ventaServicio.adicionarEntradaSalida(this.venta).subscribe(
      response => {
        if (response.code === 200) {
          alert('La venta fué almacenada correctamente');
        } else {
          console.log(response);
        }
      }, error => {
        console.log(<any>error);
      }
    );
  }


  public consultarProductos(): void {
    this.gestionarProductoServicio.consultarProductos().subscribe(listaProductos =>
      this.listaProductos = listaProductos, error => console.log(error));
  }
}