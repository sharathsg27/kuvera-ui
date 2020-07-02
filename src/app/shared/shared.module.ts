import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {DropdownComponent} from './components/dropdown/dropdown.component';
import {ButtonGroupComponent} from './components/button-group/button-group.component';
import {AppService} from '../core/services/app.service';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {UtilityService} from '../core/utilities/utility.service';
import {SearchBoxComponent} from './components/search-box/search-box.component';

@NgModule({
  declarations: [DropdownComponent, ButtonGroupComponent, HeaderComponent, SearchBoxComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    DropdownComponent,
    ButtonGroupComponent,
    HeaderComponent,
    SearchBoxComponent
  ],
  providers: [AppService, UtilityService]
})
export class SharedModule {
}

