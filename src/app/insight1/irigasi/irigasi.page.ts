import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-irigasi',
  templateUrl: './irigasi.page.html',
  styleUrls: ['./irigasi.page.scss'],
})
export class IrigasiPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  AnalisisIrigasi() {
    this.router.navigateByUrl('alsintan-irigasi');
  }
}
