import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlsintanIrigasiPage } from './alsintan-irigasi.page';

const routes: Routes = [
  {
    path: '',
    component: AlsintanIrigasiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlsintanIrigasiPage]
})
export class AlsintanIrigasiPageModule {}
