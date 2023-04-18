import { Component, Inject  } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-form-eliminar',
    templateUrl: './form-eliminar.component.html',
    styleUrls: ['./form-eliminar.component.css']
})
export class FormEliminarComponent{


    constructor(public dialogRef: MatDialogRef<FormEliminarComponent>, @Inject(MAT_DIALOG_DATA) public data: { id: number, url: string }, private http: HttpClient) {}

    aceptar() {
        const id = this.data.id;
        const transaccion = 'ELIMINAR';
        const token = localStorage.getItem('token');

        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          })
        };

        if(this.data.url === '/api/Promociones/SetPromociones'){
            const promociones = { promociones_id: id, transaccion: transaccion };
            this.http.post(this.data.url, promociones, httpOptions).subscribe(response => {
            });
        }

        if(this.data.url === '/api/Peliculas/SetPeliculas'){
            const peliculas = { pelicula_id: id, transaccion: transaccion };
            this.http.post(this.data.url, peliculas, httpOptions).subscribe(response => {
            });
        }
        if(this.data.url === '/api/Snacks/SetSnacks'){
            const snacks = { snacks_id: id, transaccion: transaccion };
            this.http.post(this.data.url, snacks, httpOptions).subscribe(response => {
            });
        }

        this.dialogRef.close();
        location.reload();
    }

    cancelar(){
        this.dialogRef.close();
    }
}