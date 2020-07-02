import {Component, Input, OnInit} from '@angular/core';
import {UtilityService} from '../../../core/utilities/utility.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input('options') options: any[];
  selectedValue: string = '';

  constructor(private utilService: UtilityService) {
  }

  ngOnInit() {
  }

  /**
   * Check if previous user sort value from session storage & restore the state on page reload
   */
  checkForValueChange = () => {
    this.utilService.updatedSelectedDropDown(this.selectedValue);
  };

}
