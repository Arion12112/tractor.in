import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  InsightPage() {
    this.router.navigateByUrl('insight1');
  }
  ServicePage() {
    this.router.navigateByUrl('service');
  }
  EducationPage() {
    this.router.navigateByUrl('education');
  }
  JualPage() {
    this.router.navigateByUrl('jual');
  }
}
