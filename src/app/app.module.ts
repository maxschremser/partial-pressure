import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {PartialPressureComponent} from './components/partial-pressure/partial-pressure.component';

const routes = [
  {path: '**', component: PartialPressureComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PartialPressureComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
