import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { PillboxPage } from '../pillbox/pillbox';
import { OverviewPage } from '../overview/overview';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  home          = HomePage;
  pillbox       = PillboxPage;
  overview      = OverviewPage;

  constructor () {

  }
}
