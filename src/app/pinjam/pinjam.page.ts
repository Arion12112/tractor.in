import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pinjam',
  templateUrl: './pinjam.page.html',
  styleUrls: ['./pinjam.page.scss'],
})
export class PinjamPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  OlahtanahPage() {
    this.router.navigateByUrl('pinjamolahtanah');
  }
  IrigasiPage() {
    this.router.navigateByUrl('pinjamirigasi');
  }
  TanamPage() {
    this.router.navigateByUrl('pinjamtanam');
  }
  PanenPage() {
    this.router.navigateByUrl('pinjampanen');
  }
}
