import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BASE_PATH } from './@api-module';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PurchasesModule } from './@purchases/purchases.module';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { JwtInterceptorService } from './auth/jwt-interceptor.service';
import { LoggerModule } from 'ngx-logger';
import { AppStateModule } from './@app-state-module/app-state.module';
import { ErrorInterceptorService } from './service/error.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    PurchasesModule,
    FlexModule,
    FlexLayoutModule,
    LoggerModule.forRoot(environment.loggerConfig),
    AppStateModule.forRoot()

  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: BASE_PATH, useValue: environment.basePath},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
