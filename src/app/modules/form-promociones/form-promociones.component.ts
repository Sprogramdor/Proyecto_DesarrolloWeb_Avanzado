import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
    selector: 'app-form-promociones',
    templateUrl: './form-promociones.component.html',
    styleUrls: ['./form-promociones.component.css']
})

export class FormPromocionesComponent{

    constructor(public dialogRef: MatDialogRef<FormPromocionesComponent>, @Inject(MAT_DIALOG_DATA) public data: { id: number, poster: string, descripcion:string, url: string }, private http: HttpClient){}

    cancelar(){this.dialogRef.close();}

    poster: string = this.data.poster;
    descripcion: string = this.data.descripcion;

    aceptar() {
        const id: number = this.data.id;
        const token = localStorage.getItem('token');

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            })
        };

        const promociones = {
            promociones_id: id,
            poster: this.poster,
            descripcion: this.descripcion,
            transaccion: id === 0 ? 'INSERTAR' : 'ACTUALIZAR'
        };

        this.http.post(this.data.url, promociones, httpOptions).subscribe(response => {
            console.log(promociones);
            console.log(response);
            this.dialogRef.close();
            location.reload();
        });
    }

}