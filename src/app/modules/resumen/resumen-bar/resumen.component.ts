import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CarritoServices } from 'src/app/shared/services/carrito.service';
import { ExinfoComponent } from '../../info/exinfo/exinfo.component';




@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent {




  constructor(private router: Router, private dialog:MatDialog, public carrito:CarritoServices){

  }
total=this.carrito.totalSnack();

  onSubmit(){
    this.dialog.open(ExinfoComponent);
  }
  cancelar(){
    this.router.navigate(['/snack-bar'])
}



 



}



