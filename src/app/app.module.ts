import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SchedulePage } from "../pages/schedule/schedule";
import { ReportPage } from "../pages/report/report";
import { HistoryPage } from "../pages/history/history";
import { ProfilePage } from "../pages/profile/profile";
import { LoginPage } from "../pages/login/login";
import { ModalPageModule } from "../pages/modal/modal.module";
import { ServiceProvider } from '../providers/service/service';
import { DetailPageModule } from "../pages/detail/detail.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SchedulePage,
    ReportPage,
    HistoryPage,
    ProfilePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ModalPageModule,
    DetailPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SchedulePage,
    ReportPage,
    HistoryPage,
    ProfilePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider
  ]
})
export class AppModule {}
