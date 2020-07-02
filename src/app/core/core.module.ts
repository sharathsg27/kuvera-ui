import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppService} from './services/app.service';
import {UtilityService} from './utilities/utility.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AppService, UtilityService]
})
export class CoreModule {
}
