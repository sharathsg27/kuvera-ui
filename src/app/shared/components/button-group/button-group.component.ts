import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss']
})
export class ButtonGroupComponent implements OnInit {
  @Input('buttonOptions') buttonOptions: any[];
  @Output('buttonValue') buttonValue = new EventEmitter<any>();
  selected: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  /**
   * Emit/Output Selected button for subscribed component
   * @param button
   */
  selectedButtonValue = (button: any) => {
    button.selected = true;
    this.buttonOptions.forEach(buttonOption => {
      if (buttonOption.key !== button.key) {
        buttonOption.selected = false;
      }
    });
    this.buttonValue.emit(button);
  }

}
