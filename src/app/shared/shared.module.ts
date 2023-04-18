import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';


import { MaterialModule } from "./material/material.module";
import { PeliculasServices } from "./services/peliculas.service";
import { PeliculasEstrenoComponent } from './components/peliculas/peliculas-estreno/peliculas-estreno.component';
import { PeliculasPreventaComponent } from './components/peliculas/peliculas-preventa/peliculas-preventa.component';
import { PeliculasDisponibleComponent } from './components/peliculas/peliculas-disponible/peliculas-disponible.component';
import { PeliculasProximamenteComponent } from './components/peliculas/peliculas-proximamente/peliculas-proximamente.component';
import { SnackBarComponent } from './components/snacks/snack-bar/snack-bar.component';
import { SnackBarServices } from "./services/snack-bar.service";
import { CarritoSnackComponent } from "./components/carratitos/carrito-snack/carrito-snack.component";
import { CarritoServices } from "./services/carrito.service";
import { SnackRowComponent } from "./components/snacks/snack-row/snack-row.component";
import { LoginService } from "./services/login.service";
import { UsuarioService } from "./services/usuario.service";
import { CardspayComponent } from "./components/cardspay/cardspay.component";
import { RegistroRealizadoComponent } from "./components/resgirstro-realizado/registro-realizado.component";
import { RegistroService } from "./services/registro.service";

@NgModule({
    declarations: [
        PeliculasEstrenoComponent,
        PeliculasPreventaComponent,
        PeliculasDisponibleComponent,
        PeliculasProximamenteComponent,
        SnackBarComponent,
        SnackRowComponent,
        CarritoSnackComponent,
        CardspayComponent,
        RegistroRealizadoComponent
       
    ],
    exports: [
        PeliculasEstrenoComponent,
        PeliculasPreventaComponent,
        PeliculasDisponibleComponent,
        PeliculasProximamenteComponent,
        SnackBarComponent,
        SnackRowComponent,
        CarritoSnackComponent,
        CardspayComponent,
        RegistroRealizadoComponent
        
    ],
    imports:[
        MaterialModule,
        CommonModule,
        HttpClientModule
    ],
    providers:[
        PeliculasServices,
        SnackBarServices,
        CarritoServices,
        LoginService,
        UsuarioService,
        RegistroService
    ]
})

export class SharedModule{}