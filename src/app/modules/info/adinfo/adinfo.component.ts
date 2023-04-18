import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adinfo',
  templateUrl: './adinfo.component.html',
  styleUrls: ['./adinfo.component.css']
})
export class AdinfoComponent {
  constructor(private dialogRef: MatDialogRef<AdinfoComponent>,private router: Router) { }
salir(){
  this.router.navigate(['/cartelera']);
  this.dialogRef.close();
}
cancelar(){
  this.dialogRef.close();
}
}
