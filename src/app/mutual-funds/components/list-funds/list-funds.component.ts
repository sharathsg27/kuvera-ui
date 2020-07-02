import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../core/services/app.service';
import {EMutualEnumAPI} from '../../../core/enums/mutual.enum';
import {UtilityService} from '../../../core/utilities/utility.service';

@Component({
  selector: 'app-list-funds',
  templateUrl: './list-funds.component.html',
  styleUrls: ['./list-funds.component.scss']
})
export class ListFundsComponent implements OnInit {
  allFunds: any[];
  displayFunds: any[];
  options: any[];
  returnPlanOptions: any[];
  searchKeys: string = 'code, name, category, reinvestment, fund_house, fund_type, fund_category, plan, returns';

  constructor(private appService: AppService,
              private utilService: UtilityService) {
    this.utilService.dropDownSelected$.subscribe(selectedDropDownValue => {
      if (selectedDropDownValue !== '') {
        this.displayFunds = this.utilService.sortByField(this.allFunds, selectedDropDownValue);
      }
    });
    this.appService.searchTermEntered$.subscribe(searchValue => {
      this.displayFunds = this.utilService.searchFundItems(searchValue, this.allFunds);
    });
  }

  ngOnInit() {
    this.getAllFunds();
    this.options = [
      {key: 'fund_category', displayName: 'Category'},
      {key: 'fund_type', displayName: 'Fund type'},
      {key: 'plan', displayName: 'Fund Plan'}
    ];
    this.returnPlanOptions = [
      {key: 'year_1', displayName: '1Y'},
      {key: 'year_3', displayName: '3Y'},
      {key: 'year_5', displayName: '5Y'},
    ];
  }

  /**
   * Get top 100 mutual funds records
   */
  getAllFunds = () => {
    this.appService.getRecords(EMutualEnumAPI.ALL_FUNDS)
      .subscribe((data: any[]) => {
        this.allFunds = data.splice(0, 100) || [];
        this.displayFunds = data.splice(0, 100) || [];
      }, error => {
        console.log(error);
      });
  };

  /**
   * Selected fund return plan
   * @param selectedValue
   */
  getSelectedBtnValue = (selectedValue) => {
    if (selectedValue) {
      this.displayFunds = this.sortReturnPlan(selectedValue.key);
    }
  };

  /**
   * Sort return plan
   * @param sortField
   */
  sortReturnPlan = (sortField) => {
    if (this.allFunds.length < 1) {
      return [];
    }
    return this.allFunds.sort((a, b) => {
      if (a.returns[sortField] && b.returns[sortField]) {
        return b.returns[sortField] - a.returns[sortField];
      }
    });
  }


}
