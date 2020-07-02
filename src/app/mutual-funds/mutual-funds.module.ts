import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MutualFundsRoutingModule} from './mutual-funds-routing.module';
import {ListFundsComponent} from './components/list-funds/list-funds.component';
import {DetailFundComponent} from './components/detail-fund/detail-fund.component';
import {CoreModule} from '../core/core.module';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [ListFundsComponent, DetailFundComponent],
  imports: [
    CommonModule,
    MutualFundsRoutingModule,
    CoreModule,
    FormsModule,
    SharedModule
  ]
})
export class MutualFundsModule {
}
