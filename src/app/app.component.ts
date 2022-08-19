import {Component, Input, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../custom-theme.scss']
})
export class AppComponent {
  selectedCurrency = 'USD';
  constructor() {
  }

  sendCurrency(sign: string) {
    this.selectedCurrency = sign;
  }
}
