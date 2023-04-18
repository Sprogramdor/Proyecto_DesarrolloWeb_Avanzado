import { Component, Input} from '@angular/core';
import {FormBuilder, FormGroup,Validators} from '@angular/forms';
import { CarritoServices } from 'src/app/shared/services/carrito.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent{

  nasientos=1;
  pageIndex=0;
  fc="";
  puesto = "";
  

  @Input() movie:any;
  
pass:any[]=[];
  
  constructor(private _formBuilder: FormBuilder, public carrito:CarritoServices
    ) {}

  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['', Validators.required]});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['', Validators.required]});
  thirdFormGroup: FormGroup = this._formBuilder.group({thirdCtrl: ['', Validators.required]});
  fourFormGroup: FormGroup = this._formBuilder.group({fourCtrl: ['']});
  fiveFormGroup: FormGroup = this._formBuilder.group({fiveCtrl: ['']});
  SixFormGroup: FormGroup = this._formBuilder.group({SixCtrl: ['', Validators.required]});
  
  aciento(p: string){
    this.puesto = p;
    this.pass.push(this.movie.titulo_original); //pelicula nombre
    this.pass.push(this.movie.precio);          // precio 
    this.pass.push(this.fc);                    // fecha 
    this.pass.push(this.secondFormGroup.get('secondCtrl')?.value); // cantidad de asiento 
    this.pass.push(this.puesto);                                   // id asiento 
    /*console.log(this.puesto);
    console.log("cantidad:"+this.secondFormGroup.get('secondCtrl')?.value);
    console.log(this.movie.titulo_original);*/
    console.log("nombre "+this.pass[0]);
  }







  val(hora: string){
    this.fc=hora;
   // console.log(this.fc)
  }

  selectedValue: string="0";
  selectedCar: string="0";
  asientos: string[] = ["A1","A2","A3","A4","A5","A6","A7","A8","A9"
                       ,"B1","B2","B3","B4","B5","B6","B7","B8","B9"
                       ,"C1","C2","C3","C4","C5","C6","C7","C8","C9"
                       ,"D1","D2","D3","D4","D5","D6","D7","D8","D9"
                       ,"E1","E2","E3","E4","E5","E6","E7","E8","E9"
                       ,"F1","F2","F3","F4","F5","F6","F7","F8","F9"]


  can: any = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'},
    {value: '6', viewValue: '6'},
    {value: '7', viewValue: '7'},
    {value: '8', viewValue: '8'},
    {value: '9', viewValue: '9'},
    {value: '10', viewValue: '10'},
  ];

}
