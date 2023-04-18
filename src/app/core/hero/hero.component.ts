import { Component } from "@angular/core";

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css']
})

export class HeroComponent{
    btnName: string = 'Ver noticia'
    hero: string[]= ['hero cine', 'hero snack', 'hero promo', 'hero tickets']

    anuncio: string[] =[
        'Los mejores precios siempre con la mejor calidad, disfruta en familia o amigos',
        'Los mejores snacks siempres frescos',
        'Martes de promoción para que no te quedes en casa',
        'Para que no te lo pierdas, realiza la compra de peliculas en preventa'
    ]

}