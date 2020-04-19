import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetectScreenDirective } from './directives/detect-screen.directive';
import { provideMyService, ScreenConfService} from './services/screen-conf.service';
import {LayoutModule} from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    DetectScreenDirective
  ],
  imports: [
    BrowserModule,
    LayoutModule
  ],
  providers: [
    { provide: ScreenConfService, useFactory: provideMyService({ mobile: 400, tablet: 700 }) }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
