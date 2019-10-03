import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tanam',
  templateUrl: './tanam.page.html',
  styleUrls: ['./tanam.page.scss'],
})
export class TanamPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  AnalisisTanamPage() {
    this.router.navigateByUrl('alsintan-tanam');
  }

}
