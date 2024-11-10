import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-pricing.component.html',
  styleUrl: './card-pricing.component.css'
})
export class CardPricingComponent {

  @Input()
  type:string = '';
  @Input()
  price:string = '';
  @Input()
  plataforms:string[] = [];

}
