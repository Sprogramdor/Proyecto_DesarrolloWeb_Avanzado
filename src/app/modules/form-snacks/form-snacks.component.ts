import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
@Component({
    selector: 'app-form-component',
    templateUrl: './form-snacks.component.html',
    styleUrls: ['./form-snacks.component.css']
})

export class FormSnakcsComponet{

    constructor(public dialogRef: MatDialogRef<FormSnakcsComponet>,
    @Inject(MAT_DIALOG_DATA) public data: { snacks_id:number, image:string, nombre:string, descripcion:string, precio:string }, private http: HttpClient){}

    cancelar(){this.dialogRef.close();}


    image =  this.data.image;
    nombre= this.data.nombre;
    descripcion=  this.data.descripcion;
    precio= this.data.precio;

    aceptar() {
        const id: number = this.data.snacks_id;
        const token = localStorage.getItem('token');

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            })
        };

        const snacks = {
            snacks_id: id,
            image: this.image,
            nombre: this.nombre,
            descripcion: this.descripcion,
            precio: this.precio,
            transaccion: id === 0 ? 'INSERTAR' : 'ACTUALIZAR'
        };

        console.log(snacks)

        this.http.post('/api/Snacks/SetSnacks', snacks, httpOptions).subscribe(response => {
            this.dialogRef.close();
            location.reload();
        });
    }

}