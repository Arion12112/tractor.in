import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlsintanOlahTanahPage } from './alsintan-olah-tanah.page';

const routes: Routes = [
  {
    path: '',
    component: AlsintanOlahTanahPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlsintanOlahTanahPage]
})
export class AlsintanOlahTanahPageModule {}
