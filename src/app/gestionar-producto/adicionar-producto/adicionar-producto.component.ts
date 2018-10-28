import { Component, OnInit } from '@angular/core';
import { ProductoDTO } from '../clases/productoDTO';
import { GestionarProductoServicio } from '../servicio/gestionar-producto.service';

@Component({
  selector: 'todoUno-adicionar-producto',
  templateUrl: './adicionar-producto.component.html',
  styleUrls: ['./adicionar-producto.component.css']
})
export class AdicionarProductoComponent implements OnInit {

  public producto: ProductoDTO;

  constructor(private gestionarProductoServicio: GestionarProductoServicio) { }

  ngOnInit() {
    this.producto = new ProductoDTO();
  }

  public crearProducto(): void {
    this.gestionarProductoServicio.crearProducto(this.producto).subscribe(
      response => {
        if (response.code === 200) {
          alert('El producto fué almacenado correctamente');
        } else {
          console.log(response);
        }
      }, error => {
        console.log(<any>error);
      }
    );
  }

}
