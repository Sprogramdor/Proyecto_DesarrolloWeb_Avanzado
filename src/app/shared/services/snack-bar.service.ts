import { Injectable } from "@angular/core";
import { SnackBars } from "../interfaces/snack.interface";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class SnackBarServices{

    private servicioUrl: string = '/api/Snacks/GetSnacks?transaccion=SELECT';

    public resultados : SnackBars[] = []
    private _snackBar: SnackBars[] = []

    constructor(private http: HttpClient){
      this.http.get<SnackBars[]>(this.servicioUrl).subscribe(
        snackBar => {
          this._snackBar = snackBar;
          this.resultados = snackBar
        }
      )
      console.log(this._snackBar);
    }

    get snacksBar(): SnackBars[]{
      return this._snackBar;
    }
}