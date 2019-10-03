import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PinjamOlahTanahPage } from './pinjam-olah-tanah.page';

const routes: Routes = [
  {
    path: '',
    component: PinjamOlahTanahPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PinjamOlahTanahPage]
})
export class PinjamOlahTanahPageModule {}
