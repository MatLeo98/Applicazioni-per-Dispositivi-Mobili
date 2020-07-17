import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/Storage';
import { HttpModule } from '@angular/http';
import { PostProvider } from '../providers/post-provider';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
  	HttpModule,
    IonicStorageModule.forRoot(), 
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    PostProvider,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
