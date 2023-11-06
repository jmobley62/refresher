import { Component, OnInit, Renderer2, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent implements OnInit, AfterViewInit {

  V2X = "../../../assets/images/ANF.png"

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    this.V2X = "../../../assets/images/ANF.png";

    setTimeout(() => {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    }, 5000);
  }

    ngAfterViewInit(): void {
    setTimeout(() => {
      const appContent = document.getElementById('app-content');
      if (appContent) {
        appContent.classList.add('visible-content');
      }
    }, 5000);
  }
}
