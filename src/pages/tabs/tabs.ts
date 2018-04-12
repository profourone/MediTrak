import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { OverviewPage } from '../overview/overview';
import { PillboxPage } from '../pillbox/pillbox';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  home = HomePage;
  overview = OverviewPage;
  pillbox = PillboxPage;

  constructor() {

  }
}
