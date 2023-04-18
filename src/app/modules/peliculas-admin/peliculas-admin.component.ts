import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Pelicula } from "src/app/shared/interfaces/pelicula.interface";
import { PeliculasServices } from "src/app/shared/services/peliculas.service";
import { FormEliminarComponent } from "../form-eliminar/form-eliminar.component";
import { FormPeliculasComponent } from "../form-peliculas/form-peliculas.component";

@Component({
    selector: 'peliculas-admin',
    templateUrl: './peliculas-admin.component.html',
    styleUrls: ['./peliculas-admin.component.css']
})

export class PeliculasAdminComponent  {

    constructor(private dialog:MatDialog, private peliculasServices: PeliculasServices, private router: Router) {
    }

    displayedColumns: string[] = ['pelicula_id','titulo_original','reparto', 'tiempo_duracion', 'tipo', 'categoria', 'clasificacion', 'precio', 'acciones'];

    get peliculas(): Pelicula[]{
        return this.peliculasServices.peliculas;
    }

    eliminar(id : number){
        this.dialog.open(FormEliminarComponent, {
            data: { id: id, url: '/api/Peliculas/SetPeliculas'}
        });
    }

    editar(id: number=0, poster?: string, titulo_original?: string, reparto?: string, sinopsis?: string,
        tiempo_duracion?: string, tipo?: string, categoria?: string, clasificacion?: string, estado?: string, precio?:number){
        this.dialog.open(FormPeliculasComponent, {
            data: { id, poster, titulo_original, reparto, sinopsis,
                tiempo_duracion, tipo, categoria, clasificacion, estado, precio }
        });
    }
}
