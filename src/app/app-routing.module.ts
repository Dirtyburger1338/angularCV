import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import {DeviceComponent} from './device/device.component';
import {FeaturesComponent} from './features/features.component';
import {ReportComponent} from './report/report.component';
import {VersionComponent} from './version/version.component'

const routes: Routes = [
  
  { path: '', redirectTo: '/device', pathMatch: 'full' },
  { path: 'device', component: DeviceComponent },
  { path: 'version', component: VersionComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'report', component: ReportComponent }

];


export const AppRoutingModule = RouterModule.forRoot(routes, { 
  useHash: true
});

