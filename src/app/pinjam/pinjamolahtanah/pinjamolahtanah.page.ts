import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pinjamolahtanah',
  templateUrl: './pinjamolahtanah.page.html',
  styleUrls: ['./pinjamolahtanah.page.scss'],
})
export class PinjamolahtanahPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  AnalisaOlahTanahPage() {
    this.router.navigateByUrl('pinjam-olah-tanah');
  }
}
