import { RegisterPageModule } from './../pages/register/register.module';
import { ChatPageModule } from './../pages/chat/chat.module';
import { ChatlistPageModule } from './../pages/chatlist/chatlist.module';
import { LoginPageModule } from './../pages/login/login.module';
import { NotifikasiPageModule } from './../pages/notifikasi/notifikasi.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { OneSignal } from '@ionic-native/onesignal';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import "hammerjs";
import { ChatProvider } from '../providers/chat/chat';
import { ChatlistProvider } from '../providers/chatlist/chatlist';
import { EmojiProvider } from '../providers/emoji/emoji';
import { KirimanProvider } from '../providers/kiriman/kiriman';
import { ContactProvider } from '../providers/contact/contact';
import { NotifikasiProvider } from '../providers/notifikasi/notifikasi';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NotifikasiPageModule,
    LoginPageModule,
    ChatlistPageModule,
    ChatPageModule,
    HttpClientModule,
    RegisterPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    OneSignal,
    SQLite,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChatProvider,
    ChatlistProvider,
    EmojiProvider,
    KirimanProvider,
    ContactProvider,
    NotifikasiProvider,
    AuthenticationProvider
  ]
})
export class AppModule {}
