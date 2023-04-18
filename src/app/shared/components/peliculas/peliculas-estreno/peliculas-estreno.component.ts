import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasServices } from 'src/app/shared/services/peliculas.service';

@Component({
  selector: 'app-peliculas-estreno',
  templateUrl: './peliculas-estreno.component.html',
  styleUrls: ['../../../../../styles.css']
})
export class PeliculasEstrenoComponent {

  get peliculasEstreno(){
    return this.peliculasServices.peliculasEstreno;
  }

  constructor(private peliculasServices: PeliculasServices, private router: Router){}

  compra(id: number){
    this.router.navigate([`/compras/${id}`]);
  }
}
