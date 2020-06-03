import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LoginPage} from "./login/login.page";
import {DirectionalmapPage} from "./directionalmap/directionalmap.page";
import {MapPage} from "./map/map.page";



const routes: Routes = [

  {
    path: 'login', component : LoginPage
  },

  {
    path: 'map',   component : MapPage
  },



  {
    path: 'directionalmap',component : DirectionalmapPage
  },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
