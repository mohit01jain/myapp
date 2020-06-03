import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DirectionalmapPage } from './directionalmap.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [
    CommonModule,
    FormsModule, BrowserModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild([
          {
            path: '',
            component: DirectionalmapPage
          }
  ])
      ],
  declarations: [DirectionalmapPage]
})
export class DirectionalmapPageModule {}
