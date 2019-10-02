import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.page.html',
  styleUrls: ['./education.page.scss'],
})
export class EducationPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  VideoPage() {
    this.router.navigateByUrl('education-video');
  }

  JadwalPenyuluhPage() {
    this.router.navigateByUrl('calendar');
  }
}
