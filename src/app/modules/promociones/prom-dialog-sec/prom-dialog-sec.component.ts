import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-prom-dialog-sec',
  templateUrl: './prom-dialog-sec.component.html',
  styleUrls: ['./prom-dialog-sec.component.css']
})
export class PromDialogSecComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<PromDialogSecComponent>){ }

  ngOnInit(): void {
  }

}
