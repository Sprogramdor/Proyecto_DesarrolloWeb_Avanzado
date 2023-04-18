import { Injectable } from "@angular/core";
import { Pelicula } from "../interfaces/pelicula.interface";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasServices {
  private servicioUrl: string = '/api/Peliculas/GetPeliculas?transaccion=SELECT';

  public resultados: Pelicula[] = [];
  private _peliculas: Pelicula[] = [];

  constructor(private http: HttpClient) {
    this.http.get<Pelicula[]>(this.servicioUrl).subscribe(
        peliculas => {
          this._peliculas = peliculas;
          this.resultados = peliculas;
        },
        error => {
          console.log('Error al cargar las películas: ', error);
        }
    );
  }

  get peliculas(): Pelicula[] {
    return this._peliculas;
  }

  get peliculasEstreno(): Pelicula[] {
    return this.peliculas.filter(pelicula => pelicula.tipo === 'Estreno');
  }

  get peliculasPreventa(): Pelicula[] {
    return this.peliculas.filter(pelicula => pelicula.tipo === 'Preventa');
  }

  get peliculasDisponible(): Pelicula[] {
    return this.peliculas.filter(pelicula => pelicula.tipo === 'Disponible');
  }

  get peliculasProximamente(): Pelicula[] {
    return this.peliculas.filter(pelicula => pelicula.tipo === 'Próximos estrenos');
  }
}