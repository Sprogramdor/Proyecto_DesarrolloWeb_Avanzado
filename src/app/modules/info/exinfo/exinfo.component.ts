import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exinfo',
  templateUrl: './exinfo.component.html',
  styleUrls: ['./exinfo.component.css']
})
export class ExinfoComponent {
  constructor(private dialogRef: MatDialogRef<ExinfoComponent>,private router: Router) { }
  salir(){
    this.router.navigate(['/']);
    this.dialogRef.close();
  }
}
