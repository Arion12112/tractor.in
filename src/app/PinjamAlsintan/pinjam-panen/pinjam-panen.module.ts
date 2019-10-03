import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PinjamPanenPage } from './pinjam-panen.page';

const routes: Routes = [
  {
    path: '',
    component: PinjamPanenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PinjamPanenPage]
})
export class PinjamPanenPageModule {}
