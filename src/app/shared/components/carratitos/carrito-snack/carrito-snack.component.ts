import { Component } from "@angular/core";
import { CarritoServices } from "src/app/shared/services/carrito.service";
import { PagoComponent } from "src/app/modules/pago/pago.component";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";

@Component({
    selector: 'app-carrito-snack',
    templateUrl: './carrito-snack.component.html',
    styleUrls: ['./carrito-snack.component.css']
})
export class CarritoSnackComponent{
    hidden = false;
    p=true;
    activo=false;
    count=0;
    suma=0;
    toggleBadgeVisibility() {
    this.hidden = !this.hidden;
    }

    constructor(public carritoS: CarritoServices, public router:Router, private dialog:MatDialog){
      
    }


    badge(){
        if(this.carritoS.cantidadcarrito() > 0){
            this.p=false;
           this.suma= this.total();
           
        }else{
            this.p=true;
        }return this.p;
    }



nbadge(){
    if(this.carritoS.cantidadcarrito() > 0){
        this.count=this.carritoS.prodcant();
    }else{
        this.count=0;
        this.badge();
    }return this.count.toString();
   
}

    total(){
        let s=this.carritoS.totalSnack();

        return s;
    }

    

    fn(){
        this.router.navigate(['/resumen-bar'])
    }
}