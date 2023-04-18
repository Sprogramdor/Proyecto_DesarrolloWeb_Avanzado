import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-registro-realizado',
    templateUrl: './registro-realizado.component.html',
    styleUrls: ['./registro-realizado.component.css']
})
export class RegistroRealizadoComponent{

    constructor(private router:Router, private dialogRef: MatDialogRef<RegistroRealizadoComponent>){}
    salir(){
        this.router.navigate(['/']);
        this.dialogRef.close();
    }
}