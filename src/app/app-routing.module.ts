import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BarComponent } from "./modules/bar/bar.component";
import { CarteleraComponent } from "./modules/cartelera/cartelera.component";
import { ComprasComponent } from "./modules/compras/compras.component";
import { HomeComponent } from "./modules/home/home.component";
import { PagoComponent } from "./modules/pago/pago.component";
import { PromocionesComponent } from "./modules/promociones/promociones/promociones.component";

import { RegistrarComponent } from "./modules/registrar/registrar.component";
import { AdinfoComponent } from "./modules/info/adinfo/adinfo.component";
import { ResumenComponent } from "./modules/resumen/resumen-bar/resumen.component";
import { ResumenRowComponent } from "./modules/resumen/resumen-row/resumen-row.component";
import { PerfilComponent } from "./modules/perfil/perfil.component";
import { ReservacionComponent } from "./modules/reservarcion/reservacion.component";
import { PerfllComponent } from "./modules/perfll/perfll.component";
import { PeliculasAdminComponent } from "./modules/peliculas-admin/peliculas-admin.component";
import { SnacksAdminComponent } from "./modules/skacks-admin/snacks-admin.component";
import { PromocionesAdminComponent } from "./modules/promociones-admin/promociones-admin.component";
import { Guardia } from "./guardia";

const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'compras/:id',       component:ComprasComponent},
    {path: 'snack-bar',         component:BarComponent},
    {path: 'cartelera',         component:CarteleraComponent},
    {path: 'pago',              component:PagoComponent},
    {path: 'promociones',       component:PromocionesComponent},
    {path: 'registrar',         component:RegistrarComponent},
    {path: 'info',              component:AdinfoComponent},
    {path: 'resumen-bar',       component:ResumenComponent},
    {path: 'resumen-row',       component:ResumenRowComponent},
    {path: 'perfil',            component:PerfilComponent, canActivate: [Guardia]},
    {path: 'reservacion',       component:ReservacionComponent, canActivate: [Guardia]},
    {path: 'error',            component:PerfllComponent},
    {path: 'peliculas-admin',   component:PeliculasAdminComponent, canActivate: [Guardia]},
    {path: 'snacks-admin',      component:SnacksAdminComponent, canActivate: [Guardia]},
    {path: 'promociones-admin', component:PromocionesAdminComponent, canActivate: [Guardia]}

]


@NgModule({
    exports:[
        RouterModule
    ],
    imports:[
        RouterModule.forRoot(routes)
    ],
    providers:[Guardia]
})

export class AppRoutingModule{}