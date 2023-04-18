import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
@Component({
    selector:'app-form-peliculas',
    templateUrl: './form-peliculas.component.html',
    styleUrls:['./form-peliculas.component.css']
})

export class FormPeliculasComponent{
    constructor(public dialogRef: MatDialogRef<FormPeliculasComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { id: number, poster:string, titulo_original:string, reparto:string, sinopsis:string,
        tiempo_duracion:number, tipo:string, categoria:string, clasificacion:string, estado:string, precio:number }
        , private http: HttpClient){}
    cancelar(){this.dialogRef.close();}

    poster: string = this.data.poster;
    titulo_original = this.data.titulo_original;
    reparto = this.data.reparto;
    sinopsis = this.data.sinopsis;
    tiempo_duracion = this.data.tiempo_duracion;
    tipo = this.data.tipo;
    categoria = this.data.categoria;
    clasificacion = this.data.clasificacion;
    estado = this.data.estado;
    precio = this.data.precio;

    aceptar() {
        const id: number = this.data.id;
        const token = localStorage.getItem('token');

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            })
        };

        const peliculas = {
            pelicula_id: id,
            poster: this.poster,
            titulo_original: this.titulo_original,
            reparto : this.reparto,
            sinopsis: this.sinopsis,
            tiempo_duracion: this.tiempo_duracion,
            tipo : this.tipo,
            categoria : this.categoria,
            clasificacion : this.clasificacion,
            estado : this.estado,
            precio : this.precio,
            transaccion: id === 0 ? 'INSERTAR' : 'ACTUALIZAR'
        };

        console.log(peliculas)

        this.http.post('/api/Peliculas/SetPeliculas', peliculas, httpOptions).subscribe(response => {
            this.dialogRef.close();
            location.reload();
        });
    }
}