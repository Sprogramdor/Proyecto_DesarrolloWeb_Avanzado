import { Component ,Input} from '@angular/core';
import { CarritoServices } from 'src/app/shared/services/carrito.service';

@Component({
  selector: 'app-resumen-row',
  templateUrl: './resumen-row.component.html',
  styleUrls: ['./resumen-row.component.css']
})



export class ResumenRowComponent {

@Input()datos:any[]=[];

t=0;
precioentrada=0;
constructor( public carrito:CarritoServices){}


total(){
  let total=0;
  this.t=0;
  this.t=this.datos[1]*this.datos[3];
  this.carrito.totalSnack();
   total=this.t+ this.carrito.totalSnack();
return total;

}



}
