import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-olah-tanah',
  templateUrl: './olah-tanah.page.html',
  styleUrls: ['./olah-tanah.page.scss'],
})
export class OlahTanahPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  AnalisaOlahTanahPage() {
    this.router.navigateByUrl('alsintan-olah');
  }

}
