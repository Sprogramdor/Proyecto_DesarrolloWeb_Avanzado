import { Component } from "@angular/core";
import { PromocionesServices } from "src/app/shared/services/promociones.service";
import { MatDialog } from "@angular/material/dialog";
import { FormEliminarComponent } from "../form-eliminar/form-eliminar.component";
import { FormPromocionesComponent } from "../form-promociones/form-promociones.component";

@Component({
    selector: 'app-promociones-admin',
    templateUrl: './promociones-admin.component.html',
    styleUrls: ['./promociones-admin.component.css']
})

export class PromocionesAdminComponent{
    constructor(private dialog:MatDialog, private promocionesServices: PromocionesServices) {
    }

    displayedColumns: string[] = ['promociones_id', 'descripcion', 'acciones'];

    get promociones(){
        return this.promocionesServices.Promociones;
    }
    editar(id : number=0, poster?:string, descripcion?:string){
        console.log(id);
        this.dialog.open(FormPromocionesComponent, {
            data: {id: id, poster:poster, descripcion:descripcion, url: '/api/Promociones/SetPromociones'}
        });
    }
    eliminar(id : number){
        this.dialog.open(FormEliminarComponent, {
            data: {id: id, url: '/api/Promociones/SetPromociones'}
        });
    }

}