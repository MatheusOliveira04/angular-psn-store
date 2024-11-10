import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';
import { CardModel } from '../../models/cardModel';

import { data } from '../../data/dataCards';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  cards:CardModel[]= [];

  cardModel!:CardModel;

  constructor() {
    this.cards = [...data];
  }


}
