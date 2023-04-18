import { AnimateTimings } from "@angular/animations";
import { Injectable } from "@angular/core";
import { MatPaginatedTabHeader } from "@angular/material/tabs/paginated-tab-header";

@Injectable()
export class CarritoServices{

    private _carrito: any = [];
     
    totalsn=0;
    xmap = new Map();
    ymap= new Map();

    get carrito(){
        //console.log("Work");
       return []
    }




    addmovie(nasientos:any,fecha:any,pelicula:any,){

    }


    addCarrito(p:any,cantidad: number){
        //this._carrito.push(p.precio);
             this.xmap.set(p,cantidad);
             if(cantidad==0){
                this.popCarrito(p);
             } //  producto y cantidad comprada 
    }

    popCarrito(p:any){
        //this._carrito.push(p.precio);
             this.xmap.delete(p); //    producto
    }



    verCarrito(){ let a
        for(let item of this.xmap.entries()){
           a=item[0].nombre;
            
        }
       return a
    }
    
    cantidadcarrito(){
        return this.xmap.size;
    }

    prodcant(){
        let c=0;
        for(let item of this.xmap.entries()){
             c=c+item[1];
          
        }
        return c;
    }

    totalSnack(){
        this.totalsn=0;
        for(let item of this.xmap.entries()){
            let a=item[0].precio*item[1];
            this.totalsn=this.totalsn+a;
        }
        return this.totalsn;
    }

    

    clearCarrito(){
      
    }
}