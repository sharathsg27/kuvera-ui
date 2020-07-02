import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppService} from '../../../core/services/app.service';
import {EFundDetailSections, EMutualEnumAPI} from '../../../core/enums/mutual.enum';
import {UtilityService} from '../../../core/utilities/utility.service';

@Component({
  selector: 'app-detail-fund',
  templateUrl: './detail-fund.component.html',
  styleUrls: ['./detail-fund.component.scss']
})
export class DetailFundComponent implements OnInit, AfterViewInit {
  @ViewChild('firstSection', {static: true}) firstSection: ElementRef;
  fund: any;
  fundNumber: any;
  currentSection: string = EFundDetailSections.GENERAL_INFO;
  fundDetailSections = EFundDetailSections;
  returnPlanOptions: any[];
  selectedReturnPlan: string;
  selectedReturnValue: number;

  constructor(private route: ActivatedRoute,
              private appService: AppService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.fundNumber = params.id;
      this.getFundDetail();
    });
    this.returnPlanOptions = [
      {key: 'year_1', displayName: '1Y'},
      {key: 'year_3', displayName: '3Y'},
      {key: 'year_5', displayName: '5Y'},
    ];
  }

  ngAfterViewInit() {
    setTimeout(() => this.firstSection.nativeElement.focus(), 0);
  }

  getFundDetail = () => {
    this.appService.getRecordDetail(EMutualEnumAPI.FUND_DETAIL, this.fundNumber)
      .subscribe(fund => {
        this.fund = fund[0];
        console.log(fund[0]);
      });
  };

  /**
   * Fund detail sections
   * @param section
   */
  selectSection = (section: string) => {
    switch (section) {
      case EFundDetailSections.GENERAL_INFO:
        this.currentSection = section;
        break;
      case EFundDetailSections.FUND_VALUE:
        this.currentSection = section;
        break;
      case EFundDetailSections.FUND_PLAN:
        this.currentSection = section;
        this.selectedReturnValue = this.fund.returns.year_1;
        this.selectedReturnPlan = 'year_1';
        break;
      default:
        break;
    }
  };

  /**
   * Selected return plan
   * @param plan
   */
  setSelectedPlan = (plan: any) => {
    this.selectedReturnPlan = plan.key;
    this.selectedReturnValue = this.fund.returns[this.selectedReturnPlan];
  };
}
