import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { ContentComponent } from './content/content.component';
import { DeviceComponent } from './device/device.component';
import { FeaturesComponent } from './features/features.component';
import { VersionComponent } from './version/version.component';
import { ReportComponent } from './report/report.component';
import { GlobalsService } from './services/helpers/globals.service';

@NgModule({
  declarations: [
    AppComponent,
    LeftmenuComponent,
    ContentComponent,
    DeviceComponent,
    FeaturesComponent,
    VersionComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GlobalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
