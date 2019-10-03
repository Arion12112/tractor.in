import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pinjampanen',
  templateUrl: './pinjampanen.page.html',
  styleUrls: ['./pinjampanen.page.scss'],
})
export class PinjampanenPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  AnalisisPanenPage() {
    this.router.navigateByUrl('pinjam-panen');
  }

}
