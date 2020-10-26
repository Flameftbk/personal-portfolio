import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import anime from '../../../node_modules/animejs';
import Typed from 'typed.js';
import { tap, take } from 'rxjs/operators';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { analytics } from 'firebase';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  public loading = false;
  public data:any = null;
  public last_update = null;
  constructor(private ngxSmartModalService: NgxSmartModalService, private afs: AngularFirestore) { }

  ngOnInit() {
    this.afs.collection('coffee').doc('bjoern_coffee').valueChanges().subscribe(data => {
      this.data = data;
    });
  }

  ngAfterViewInit() {
    console.log(this.data);
    setTimeout(() => {
      this.loading = false;
    }, 200);
    setTimeout(() => {
      anime({
        targets: '.animate',
        translateX: 0,
        scale: 1,
        rotate: '3turn',
        duration: 4500
      });
    }, 0);
    const typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      typeSpeed: 30,
      startDelay: 1500,
      showCursor: false
    });
    const typed2 = new Typed('#typed2', {
      stringsElement: '#typed-strings2',
      typeSpeed: 30,
      startDelay: 2400,
      showCursor: false
    });
    const typed3 = new Typed('#typed3', {
      stringsElement: '#typed-strings3',
      typeSpeed: 30,
      startDelay: 3300,
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
