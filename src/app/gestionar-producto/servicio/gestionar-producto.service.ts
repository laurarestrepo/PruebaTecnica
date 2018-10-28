import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductoDTO } from '../clases/productoDTO';

/** 
 * @author laura rodriguez
 */
@Injectable({
    providedIn: 'root'
})
export class GestionarProductoServicio {
    /** Constructor de la clase. */
    constructor(private http: HttpClient) {

    }

    /**
     * Método encargado de consultar la lista de productos */
    public consultarProductos(): Observable<any> {
        return this.http.get("http://localhot:8080/");
    }

    /**
     * Método encargado de almacenar un producto
     * @param producto 
     */
    public crearProducto(producto: ProductoDTO): Observable<any> {
        const json = JSON.stringify(producto);
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        headers.set('Access-Control-Allow-Origin', '*');
        headers.set('Accept', 'application/json, text/plain, */*');
        headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        return this.http.post("https://localhost/8080", json, { headers: headers });

    }
} 