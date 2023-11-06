import { Component } from '@angular/core';
import {Fish} from "../fish/fish"

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  myFish: Fish = new Fish('Salmon', 'Red', 5, 30, 'image.png', 20, 'A tasty fish');

}
