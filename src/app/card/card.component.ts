import { Component } from '@angular/core';
import { IIPlanes } from './@types/types';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
plane:IIPlanes ={
infos:{
  type: 'Simples',
  price:300
}
}
}
