import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import { AdinfoComponent } from '../info/adinfo/adinfo.component';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  constructor(private router: Router,private dialog:MatDialog){}
  selected = 'option2';
  
  ngOnInit(): void {
  }
  pagoNuevo = new FormGroup({
    nombres: new FormControl('',Validators.required),
    correo: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required),
    nombret: new FormControl('', Validators.required),
    tarjeta: new FormControl('', Validators.required),
    codigo: new FormControl('', Validators.required)
  })
  onSubmit(){
    let objToSend: NavigationExtras = {
      queryParams: {
        nombres: this.pagoNuevo.value.nombres,
        correo: this.pagoNuevo.value.correo,
        numero: this.pagoNuevo.value.numero,
        nombret: this.pagoNuevo.value.nombret,
        tarjeta: this.pagoNuevo.value.tarjeta,
        codigo: this.pagoNuevo.value.codigo
      },
      skipLocationChange: false,
      fragment: 'top' 
    };

  }
  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { datosCliente: objToSend}}));
  }
  cancelar(){
      console.log('log')
      this.dialog.open(AdinfoComponent)
  }
  
}
