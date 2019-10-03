import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PinjamIrigasiPage } from './pinjam-irigasi.page';

const routes: Routes = [
  {
    path: '',
    component: PinjamIrigasiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PinjamIrigasiPage]
})
export class PinjamIrigasiPageModule {}
