import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Usuario } from "../interfaces/usuario.interface";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService{

    private servicioUrl: string = '/api/Usuario/GetPerfil';

    constructor(private http:HttpClient){}

    perfil(user: Usuario){
        return this.http.post(this.servicioUrl, user);
    }

    public _usuarioR: Usuario[] =  []
}