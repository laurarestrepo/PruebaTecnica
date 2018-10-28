import { ProductoDTO } from "../gestionar-producto/clases/productoDTO";

export class EntradaSalidaDTO {

    public id: number;
    public producto: ProductoDTO;
    public fecha: Date;
    public cantidad: number;
    public tipo: boolean;

    constructor() {

    }
}