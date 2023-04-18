import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Usuario } from "../interfaces/usuario.interface";

@Injectable({
    providedIn: 'root'
})
export class LoginService{

    private servicioUrl: string = '/api/Usuario/PostLog';
    private servicioUC: string = '/api/Usuario/PostLogUC';

    constructor(private http: HttpClient){}

    login(user: Usuario){
        return this.http.post(this.servicioUrl, user);
    }

    perfil(user: Usuario){
        const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("token") };
        return this.http.post(this.servicioUC, user, { headers });
    }

    username: string = '';
}