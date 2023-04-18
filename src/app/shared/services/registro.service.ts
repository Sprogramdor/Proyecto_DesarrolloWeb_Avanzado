import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Usuario } from "../interfaces/usuario.interface";

@Injectable({
    providedIn: 'root'
})
export class RegistroService{

    private servicioUrl: string = '/api/Usuario/PostRegistro';

    constructor(private http:HttpClient){}

    registro(user: Usuario){
        return this.http.post(this.servicioUrl, user);
    }

}