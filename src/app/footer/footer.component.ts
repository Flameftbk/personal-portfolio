import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit {
  public loading = true;

  constructor(private ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.loading = false;
    }, 1100);
  }

  openImpressum() {
    this.ngxSmartModalService.getModal('impressumModal').open();
  }

  openDatenschutz() {
    this.ngxSmartModalService.getModal('datenschutzModal').open();
  }

  scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      });
    }
}
