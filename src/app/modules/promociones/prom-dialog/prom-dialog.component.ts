import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-prom-dialog',
  templateUrl: './prom-dialog.component.html',
  styleUrls: ['./prom-dialog.component.css']
})
export class PromDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<PromDialogComponent>) { }

  ngOnInit(): void {
  }

}
