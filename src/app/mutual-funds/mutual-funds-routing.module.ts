import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListFundsComponent} from './components/list-funds/list-funds.component';
import {DetailFundComponent} from './components/detail-fund/detail-fund.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {path: 'list', component: ListFundsComponent, pathMatch: 'full'},
  {path: 'detail/:id', component: DetailFundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MutualFundsRoutingModule {
}
