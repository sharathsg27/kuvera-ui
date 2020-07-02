import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  // Observable string sources
  private dropdownSource = new Subject<string>();
  // Observable string streams
  dropDownSelected$ = this.dropdownSource.asObservable();

  constructor() {
  }

  /**
   * Communicate updated dropdown value
   * @param mission
   */
  updatedSelectedDropDown(mission: any) {
    this.dropdownSource.next(mission);
  }

  /**
   * Search items based on multiple key parameters
   * @param {string} searchTerm
   * @param {Array} items
   */
  searchFundItems = (searchTerm: string = '', items: any[]) => {
    const keys = Object.keys(items[0]).join(',');
    searchTerm = searchTerm.trim().toUpperCase();
    return (items || []).filter(item => keys.split(',')
      .some(key => {
        if (key === 'returns') {
          for (const returnPlan in item[key]) {
            if (item[key].hasOwnProperty(returnPlan) && item[key][returnPlan].toString().startsWith(searchTerm)) {
              return item;
            }
          }
        } else {
          if (item[key]) {
            let value = '';
            typeof item[key] === 'string' ? value = item[key].toUpperCase() : value = item[key].toString().toUpperCase();
            return item.hasOwnProperty(key) && value.includes(searchTerm) && new RegExp(searchTerm, 'gi').test(value);
          }
        }
      }));
  };

  /**
   * Sort by fields
   * @param list
   * @param fieldToCompare
   */
  sortByField = (list: any[] = [], fieldToCompare: string = '') => {
    if (list.length < 1) {
      return [];
    }
    return list.sort((a, b) => {
      if (a[fieldToCompare] && b[fieldToCompare]) {
        return a[fieldToCompare].localeCompare(b[fieldToCompare], 'en', {sensitivity: 'base'});
      }
    });
  };
}
