import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './@theme/guards/auth.guard';
import { QualityGuard } from './@theme/guards/quality.guard';
import { NotFoundComponent } from './pages/miscellaneous/not-found/not-found.component';
import { PagesComponent } from './pages/pages.component';

export const routes: Routes = [
  
  
  {path:'pages',
component:PagesComponent,
children:[{
  path: 'waste',
  loadChildren: () => import('./pages/waste/waste.module')
    .then(m => m.WasteModule),
  //canActivate: [StopAuthGuard]
},]},
  
 
  // { path: '', redirectTo: 'auth', pathMatch: 'full' },
  // { path: '**', redirectTo: 'auth' },
  { path: '', redirectTo: 'pages/waste', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/waste' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      useHash:false,
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
