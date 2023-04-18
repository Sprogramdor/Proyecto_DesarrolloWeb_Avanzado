import { Injectable } from "@angular/core";
import { Promociones } from "../interfaces/promociones.interface";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class PromocionesServices{

    private servicioUrl: string = '/api/Promociones/GetPromociones?transaccion=SELECT';

    public resultados : Promociones[] = []
    private _promociones: Promociones[] = []

    constructor(private http: HttpClient){
      this.http.get<Promociones[]>(this.servicioUrl).subscribe(
        promociones => {
          this._promociones = promociones;
          this.resultados = promociones
        },
        error => {
            console.log('Error al cargar las promociones', error);
        }
      );
    }

    get Promociones(): Promociones[]{
        return this._promociones;
    }
}