import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapPageRoutingModule } from './map-routing.module';

import { MapPage } from './map.page';
import {AgmCoreModule} from "@agm/core";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCLEV562QGsIfx4ONic8A1PsOvjAVQLDmY',
      clientId:'829943312672-8ashhbhlva0mp758usak0gu27dnt25sf.apps.googleusercontent.com',

    })
  ],
  declarations: [MapPage]
})
export class MapPageModule {}
