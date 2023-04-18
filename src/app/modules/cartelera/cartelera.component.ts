import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';



interface Tipos {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
})


export class CarteleraComponent {


constructor() {

  this.tform = new FormGroup({
    tipopelicula: this.TiposControl
  }); }


  tform: FormGroup;

  tipos: Tipos[] = [
    {value: '0', viewValue: "Estrenos"},
    {value: '1', viewValue: 'Preventas'},
    {value: '2', viewValue: 'Disponibles'},
    {value: '3', viewValue: 'Proxiamente'},
  ];

  TiposControl = new FormControl(this.tipos[2].viewValue);
}
