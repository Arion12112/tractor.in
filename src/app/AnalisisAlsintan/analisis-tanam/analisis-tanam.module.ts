import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnalisisTanamPage } from './analisis-tanam.page';

const routes: Routes = [
  {
    path: '',
    component: AnalisisTanamPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnalisisTanamPage]
})
export class AnalisisTanamPageModule {}
