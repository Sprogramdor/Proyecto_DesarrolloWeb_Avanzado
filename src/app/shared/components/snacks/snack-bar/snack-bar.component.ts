import { Component, OnInit } from '@angular/core';
import { SnackBarServices } from 'src/app/shared/services/snack-bar.service';
import { Router } from '@angular/router';
import { SnackBars } from 'src/app/shared/interfaces/snack.interface';
import { CarritoServices } from 'src/app/shared/services/carrito.service';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {

  value: number[] = [];

  constructor(private snackBarServices: SnackBarServices, private router:Router, public carrito:CarritoServices) {
   }

  get snackBar(){
    return this.snackBarServices.snacksBar;
  }

  ngOnInit(): void {
    for(let i=0; i <= this.snackBar.length; i++){
      this.value[i] = 0;
    }
  }

  adquirir(i: number, value:number, prod:SnackBars){
    this.value[i] = this.value[i] + value;

    if(this.value[i] > 10){
      this.value[i]=10;
      //console.log(idprod);
    }

    //console.log(prod.nombre);
    console.log("add"+this.carrito.cantidadcarrito());

    this.carrito.addCarrito(prod,this.value[i]);

  }


  quitar(i: number, value:number, prod:SnackBars){
    this.value[i] = this.value[i] + value;

    if(this.value[i] < 0){
      this.value[i]=0;
      //console.log(idprod);
  } //console.log("borrado"+prod.nombre);

 
    this.carrito.addCarrito(prod,this.value[i]);
  

  /*if(this.value[0]==0){
   this.carrito.popCarrito(prod);
}*/
console.log("quit "+this.carrito.cantidadcarrito());
console.log("quit "+this.carrito.verCarrito());
  }

  addCarrito(){
    this.router.navigate(['/pago']);
  }

}
