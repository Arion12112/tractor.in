import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pinjamtanam',
  templateUrl: './pinjamtanam.page.html',
  styleUrls: ['./pinjamtanam.page.scss'],
})
export class PinjamtanamPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  AnalisisTanamPage() {
    this.router.navigateByUrl('pinjam-tanam');
  }


}
