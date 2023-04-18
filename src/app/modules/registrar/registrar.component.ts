import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { RegistroRealizadoComponent } from "src/app/shared/components/resgirstro-realizado/registro-realizado.component";
import { Usuario } from "src/app/shared/interfaces/usuario.interface";
import { RegistroService } from "src/app/shared/services/registro.service";
import { Router} from '@angular/router';
@Component({
    selector :'app-registrar',
    templateUrl: './registrar.component.html',
    styleUrls: ['./registrar.component.css']

})
export class RegistrarComponent implements OnInit{

    constructor(private registroService: RegistroService, private dialog:MatDialog, private router: Router){}

    usuarioRegistro = new FormGroup({
        usuario_id       : new FormControl(0),
        foto             : new FormControl('NULL'),
        rol              : new FormControl('usuario'),
        nombres          : new FormControl('',Validators.required),
        apellido        : new FormControl('', Validators.required),
        cedula           : new FormControl('', Validators.required),
        ciudad           : new FormControl('', Validators.required),
        direccion        : new FormControl('', Validators.required),
        email : new FormControl('', [Validators.required, Validators.email]),
        username         : new FormControl('', Validators.required),
        password         : new FormControl('', Validators.required),
        transaccion      : new FormControl()
    })

    ngOnInit(){
    }


    registrar() {
        this.usuarioRegistro.value.transaccion = "INSERTAR"
        this.registroService.registro(this.usuarioRegistro.value as Usuario).subscribe(() => {
            this.dialog.open(RegistroRealizadoComponent);
        }, (errorData) => {
            console.log(Error);
        });
    }

}