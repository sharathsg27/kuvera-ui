import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {UtilityService} from '../../../core/utilities/utility.service';
import {AppService} from '../../../core/services/app.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  searchTerm: string;
  searchTermChanged: Subject<string> = new Subject<string>();

  constructor(private appService: AppService) {
    this.searchTermChanged.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(value => {
      this.appService.searchValue(value);
    });
  }

  ngOnInit() {
  }

  /**
   * Emit searched value for all the subscribed components
   */
  searchValues = () => {
    this.searchTermChanged.next(this.searchTerm);
  };

}
