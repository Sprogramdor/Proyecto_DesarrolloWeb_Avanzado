import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-cardspay',
  templateUrl: './cardspay.component.html',
  styleUrls: ['./cardspay.component.css']
})
export class CardspayComponent implements OnInit {

  constructor() { }

  cards = [
    {
        card_id: "1",
        img: '../../../../../assets/img/cardscredit/Card1.PNG',
        nombre: 'MasterCards',
        descripcion: 'Valida 2023',
        dinero: 5
    },
    {
        card_id: "2",
        img: '../../../../../assets/img/cardscredit/Card2.PNG',
        nombre: 'MasterCards',
        descripcion: 'Valida 2023',
        dinero: 2
    },
    {
        card_id: "3",
        img: '../../../../../assets/img/cardscredit/Card3.PNG',
        nombre: 'MasterCards',
        descripcion: 'Valida 2023',
        dinero: 5
    }
]



  ngOnInit(): void {
    
  }

}
