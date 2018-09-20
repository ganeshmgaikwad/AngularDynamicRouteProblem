import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';

import { CustomServices, Item } from './services/CustomServices';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links: Array<Item> = [];

  constructor(private router: Router, private customServices: CustomServices) {

    let injector = Injector.create([
      { provide: "page1", useClass: Page1Component, deps: [] },
      { provide: "page2", useClass: Page2Component, deps: [] },
      { provide: "page3", useClass: Page3Component, deps: [] },
      { provide: "page4", useClass: Page4Component, deps: [] }
    ]);

    let comp1 = injector.get("page1");
    console.log(comp1); // this works 

    this.router.config.unshift(
      { path: 'page1', component: comp1 }, // this fails 
      { path: 'page2', component: injector.get("page2") },
      { path: 'page3', component: injector.get("page3") },
      { path: 'page4', component: injector.get("page4") }
    );

    this.links = this.customServices.items ;
  }

}
