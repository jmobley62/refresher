import { Component } from '@angular/core';
import {Fish} from "../fish/fish"

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  salmon: Fish = new Fish('Salmon', 'Red', 5, 30, 'image.png', 20, 'A tasty fish');
  tuna: Fish = new Fish('Tuna', 'Blue', 5, 30, 'image.png', 20, 'A tasty fish');
  trout: Fish = new Fish('Trout', 'Brown', 5, 30, 'image.png', 20, 'A tasty fish');
  bass: Fish = new Fish('Bass', 'Green', 5, 30, 'image.png', 20, 'A tasty fish');

}
