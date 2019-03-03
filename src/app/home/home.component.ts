import { Component, OnInit, AfterViewInit } from '@angular/core';
import anime from '../../../node_modules/animejs';
import Typed from 'typed.js';
import { NgxSmartModalService } from 'ngx-smart-modal';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  public loading = true;
  constructor(private ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.loading = false;
    }, 800);
    setTimeout(() => {
      anime({
        targets: '.animate',
        translateX: 0,
        scale: 1,
        rotate: '3turn',
        duration: 4500
      });
    }, 3200);
    const typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      typeSpeed: 30,
      startDelay: 1300,
      showCursor: false
    });
    const typed2 = new Typed('#typed2', {
      stringsElement: '#typed-strings2',
      typeSpeed: 30,
      startDelay: 2200,
      showCursor: false
    });
    const typed3 = new Typed('#typed3', {
      stringsElement: '#typed-strings3',
      typeSpeed: 30,
      startDelay: 3100,
      showCursor: false
    });
    const typed4 = new Typed('#typed4', {
      stringsElement: '#typed-strings4',
      typeSpeed: 40,
      startDelay: 5400,
      showCursor: false
    });
  }
  scrollDown() {
    const height = document.documentElement.clientHeight;
    window.scrollBy({
      'top': height,
      'behavior': 'smooth'
    });
  }

}
