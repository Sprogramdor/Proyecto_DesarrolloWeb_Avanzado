import { Component } from "@angular/core";
import { Usuario } from "src/app/shared/interfaces/usuario.interface";
import { LoginService } from "src/app/shared/services/login.service";
import { UsuarioService } from "src/app/shared/services/usuario.service";
import {Router} from '@angular/router';

@Component({
    selector: '',
    templateUrl: './perfil.component.html',
    styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

    id = '';
    constructor(private usuarioServices: UsuarioService, public loginService: LoginService, private router: Router){
        this.usuario = JSON.parse(this.p || '');
    }
    reservar(){
        this.router.navigate(['/reservacion']);
    }
    p = localStorage.getItem('perfil')

    usuario = this.usuarioServices._usuarioR;

    usernow = localStorage.getItem("username") || '';
}