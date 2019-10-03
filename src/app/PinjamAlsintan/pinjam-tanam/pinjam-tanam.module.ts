import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PinjamTanamPage } from './pinjam-tanam.page';

const routes: Routes = [
  {
    path: '',
    component: PinjamTanamPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PinjamTanamPage]
})
export class PinjamTanamPageModule {}
