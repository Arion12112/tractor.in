import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlsintanPanenPage } from './alsintan-panen.page';

const routes: Routes = [
  {
    path: '',
    component: AlsintanPanenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlsintanPanenPage]
})
export class AlsintanPanenPageModule {}
