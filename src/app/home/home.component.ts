import { Component, OnInit, AfterViewInit } from '@angular/core';
import anime from '../../../node_modules/animejs';
import { NgxSmartModalService } from 'ngx-smart-modal';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      anime({
        targets: '.animate',
        translateX: 0,
        scale: 1,
        rotate: '1turn',
        duration: 3000
      });
    }, 500);
  }
  scrollDown() {
    const height = document.documentElement.clientHeight;
    window.scrollBy({
      'top': height,
      'behavior': 'smooth'
    });
  }

}
