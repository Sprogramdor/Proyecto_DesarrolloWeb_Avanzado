import { Component, OnInit,Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'
import { LoginService } from "src/app/shared/services/login.service";
import { UsuarioService } from "src/app/shared/services/usuario.service";
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { Usuario } from "src/app/shared/interfaces/usuario.interface";
export interface DialogData {
    date: Date;
    horario : string;
    sala:string;
    horas:string;
  }
  
@Component({
    selector: 'app-reservacion',
    templateUrl: './reservacion.component.html',
    styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent implements OnInit{
    
    date = new Date((new Date().getTime()));
    horario = 'No';
    sala="Ha seleccionado";
    horas="nada aun";
    constructor( private router: Router,public loginService: LoginService, public dialog: MatDialog){};
    selectFormControl = new FormControl('', Validators.required);
    ngOnInit(): void {
        
        this.loginService.username = localStorage.getItem('usuario') || '';
        
    }
    padTo2Digits(num: number) {
        return num.toString().padStart(2, '0');
      }

     formatDate(date: Date) {
        return (
          [
            date.getFullYear(),
            this.padTo2Digits(date.getMonth() + 1),
            this.padTo2Digits(date.getDate()),
          ].join('-') +
          ' ' 
        );
      }
      openDialog() {
        const dialogRef = this.dialog.open(DialogoReserva, {
          data: {date: this.date, horario: this.horario, sala: this.sala ,horas: this.horas},
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.date = result;
        });
      }
      cancel(): void{
        this.router.navigate(['/perfil']);
    }


}
@Component({
    selector: 'dialogoReserva',
    templateUrl: './dialogoReserva.html',
  })
  export class DialogoReserva {
    constructor(
      public dialogRef: MatDialogRef<DialogoReserva>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData, private router: Router,
    ) {}
  
    onNoClick(): void {
      this.dialogRef.close();
      this.router.navigate(['/reservacion']);
      window.location.reload();
    }

    

    padTo2Digits(num: number) {
        return num.toString().padStart(2, '0');
      }
    formatDate(date: Date) {
        return (
          [
            date.getFullYear(),
            this.padTo2Digits(date.getMonth() + 1),
            this.padTo2Digits(date.getDate()),
          ].join('-') +
          ' ' 
        );
      }

     
  }