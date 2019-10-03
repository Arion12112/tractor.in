import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pinjamirigasi',
  templateUrl: './pinjamirigasi.page.html',
  styleUrls: ['./pinjamirigasi.page.scss'],
})
export class PinjamirigasiPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  AnalisisIrigasi() {
    this.router.navigateByUrl('pinjam-irigasi');
  }
}
