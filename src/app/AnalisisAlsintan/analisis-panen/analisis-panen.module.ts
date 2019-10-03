import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnalisisPanenPage } from './analisis-panen.page';

const routes: Routes = [
  {
    path: '',
    component: AnalisisPanenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnalisisPanenPage]
})
export class AnalisisPanenPageModule {}
