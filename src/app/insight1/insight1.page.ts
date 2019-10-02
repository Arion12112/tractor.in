import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insight1',
  templateUrl: './insight1.page.html',
  styleUrls: ['./insight1.page.scss'],
})
export class Insight1Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  OlahtanahPage() {
    this.router.navigateByUrl('olah-tanah');
  }
  IrigasiPage() {
    this.router.navigateByUrl('irigasi');
  }
  TanamPage() {
    this.router.navigateByUrl('tanam');
  }
  PanenPage() {
    this.router.navigateByUrl('panen');
  }
}
