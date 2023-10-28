import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'Navbar',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent {
  V2X = "./../../assets/images/V2X.webp"
  gffhjhj
  backgroundColor = true;
  MenubackgroundColor = true;

  constructor(private router: Router) { }

  navigateToVectrus() {
    window.open('http://careers.vectrus.com', '_blank'); // You can also use this.router.navigate() if you prefer Angular routing
  }

  navigateToVertex() {
    window.open('https://recruiting2.ultipro.com/VER1018VALLC/JobBoard/ea4d56d0-a413-48c6-87f7-32d00fd2eef4/?q=&o=postedDateDesc%20', '_blank'); // You can also use this.router.navigate() if you prefer Angular routing
  }
}
