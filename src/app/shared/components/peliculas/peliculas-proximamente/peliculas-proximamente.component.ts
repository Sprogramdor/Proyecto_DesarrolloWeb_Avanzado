import { Component } from '@angular/core';
import { PeliculasServices } from 'src/app/shared/services/peliculas.service';

@Component({
  selector: 'app-peliculas-proximamente',
  templateUrl: './peliculas-proximamente.component.html',
  styleUrls: ['../../../../../styles.css']
})
export class PeliculasProximamenteComponent{


  get peliculasProximamente(){
    return this.peliculasServices.peliculasProximamente;
  }

  constructor(private peliculasServices: PeliculasServices) { }


}
