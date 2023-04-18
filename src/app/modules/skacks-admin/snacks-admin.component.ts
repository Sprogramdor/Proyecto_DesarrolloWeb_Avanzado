import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { SnackBarServices } from "src/app/shared/services/snack-bar.service";
import { FormEliminarComponent } from "../form-eliminar/form-eliminar.component";
import { FormSnakcsComponet } from "../form-snacks/form-snacks.component";

@Component({
    selector: 'snacks-admin',
    templateUrl: './snacks-admin.component.html',
    styleUrls: ['./snacks-admin.component.css']
})

export class SnacksAdminComponent  {

    constructor(private dialog:MatDialog, private snackBarServices: SnackBarServices, private router: Router) {
    }

    displayedColumns: string[] = ['snacks_id', 'nombre', 'descripcion', 'precio', 'acciones'];

    get snackBar(){
        return this.snackBarServices.snacksBar;
    }

    editar(snacks_id: number=0, image?:string, nombre?:string, descripcion?:string, precio?:number){
        this.dialog.open(FormSnakcsComponet,{
            data: {snacks_id:snacks_id, image:image, nombre:nombre, descripcion:descripcion ,precio:precio,url: '/api/Snacks/SetSnacks'}
        });
    }

    eliminar(id : number){
        this.dialog.open(FormEliminarComponent, {
            data: { id: id, url: '/api/Snacks/SetSnacks'}
        });
    }
}