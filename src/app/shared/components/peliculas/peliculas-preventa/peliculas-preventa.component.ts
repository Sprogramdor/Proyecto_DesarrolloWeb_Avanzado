import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasServices } from 'src/app/shared/services/peliculas.service';

@Component({
  selector: 'app-peliculas-preventa',
  templateUrl: './peliculas-preventa.component.html',
  styleUrls: ['../../../../../styles.css']
})
export class PeliculasPreventaComponent {

  get peliculasPreventa(){
    return this.peliculasServices.peliculasPreventa;
  }

  constructor(private peliculasServices: PeliculasServices, private router: Router) { }

  compra(id: number){
    this.router.navigate([`/compras/${id}`]);
  }

}
