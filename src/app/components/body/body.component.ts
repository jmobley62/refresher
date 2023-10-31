import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  spartan = "../../../assets/images/shield.png"
  V2X = "../../../assets/images/ANF.png"

  sendUser(val: string) {
    const allowedDomains: string[] = ["@example.com", "@gmail.com", "@hotmail.com", "@yahoo.com"];

    if (!allowedDomains.some(domain => val.endsWith(domain))) {
      throw new Error(`Email address must belong to one of the following domains: ${allowedDomains.join(', ')}.`);
    }

    console.warn(val);
  }



}
