import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { CustomServices } from './services/CustomServices';


export function app_init(customServices: CustomServices) {
  return () => {
    return customServices.getConfigData();
  }
}


@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    HomeComponent,
    NotFoundComponent,
    Page3Component,
    Page4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CustomServices,
    { provide: APP_INITIALIZER, useFactory: app_init, deps: [CustomServices], multi: true }
  ],
  entryComponents: [
    HomeComponent,
    NotFoundComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
