import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {PartialPressureComponent} from './components/partial-pressure/partial-pressure.component';
import { MaximumOperatingDepthComponent } from './components/maximum-operating-depth/maximum-operating-depth.component';
import { MeterPipe } from './meter.pipe';
import { EquivalentAirDepthComponent } from './components/equivalent-air-depth/equivalent-air-depth.component';

const routes = [
  {path: 'mod', component: MaximumOperatingDepthComponent},
  {path: 'ead', component: EquivalentAirDepthComponent},
  {path: '**', component: PartialPressureComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PartialPressureComponent,
    MaximumOperatingDepthComponent,
    MeterPipe,
    EquivalentAirDepthComponent
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
