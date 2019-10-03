import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PinjamolahtanahPage } from './pinjamolahtanah.page';

const routes: Routes = [
  {
    path: '',
    component: PinjamolahtanahPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PinjamolahtanahPage]
})
export class PinjamolahtanahPageModule {}
