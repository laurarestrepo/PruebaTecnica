import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EntradaSalidaDTO } from '../clases/EntradaSalidaDTO';

/** 
 * @author laura rodriguez
 */
@Injectable({
    providedIn: 'root'
})
export class VentaServicio {
    /** Constructor de la clase. */
    constructor(private http: HttpClient) {

    }

    /**
    * Método encargado de almacenar una entrada o salida al stock
    * @param entradaSalida 
    */
    public adicionarEntradaSalida(entradaSalida: EntradaSalidaDTO): Observable<any> {
        const json = JSON.stringify(entradaSalida);
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        headers.set('Access-Control-Allow-Origin', '*');
        headers.set('Accept', 'application/json, text/plain, */*');
        headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        return this.http.post("https://localhost/8080", json, { headers: headers });

    }
} 