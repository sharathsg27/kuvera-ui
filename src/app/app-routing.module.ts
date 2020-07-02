import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'mutual-funds'},
  {path: 'mutual-funds', loadChildren: () => import('./mutual-funds/mutual-funds.module').then(m => m.MutualFundsModule)},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
