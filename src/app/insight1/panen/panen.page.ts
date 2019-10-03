import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panen',
  templateUrl: './panen.page.html',
  styleUrls: ['./panen.page.scss'],
})
export class PanenPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  AnalisisPanenPage() {
    this.router.navigateByUrl('alsintan-panen');
  }

}
