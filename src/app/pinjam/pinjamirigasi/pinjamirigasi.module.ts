import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PinjamirigasiPage } from './pinjamirigasi.page';

const routes: Routes = [
  {
    path: '',
    component: PinjamirigasiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PinjamirigasiPage]
})
export class PinjamirigasiPageModule {}
