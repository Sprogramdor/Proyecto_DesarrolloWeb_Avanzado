import { Component, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from "src/app/modules/login/login.component";
import { LoginService } from "src/app/shared/services/login.service";
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{

    constructor(private dialog:MatDialog, public loginService: LoginService, private router: Router){}

    openDialogSesion(){
        this.dialog.open(LoginComponent)
    }

    Salir(){
        this.loginService.username = "";
        this.router.navigate(['']);
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        localStorage.removeItem('perfil');
    }

    perfil(){
        this.router.navigate(['/perfil']);
    }

    ngOnInit(): void {
        this.loginService.username = localStorage.getItem("username") || '';
    }
}