import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
//import { ResentPostListComponent } from './slope/resent-post-list/resent-post-list.component';
import { HttpClientModule } from '@angular/common/http';
//import { MainComponent } from './slope/main/main.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { SlopeModule } from './slope/slope.module';
import { AppInterceptorProvider } from './app.interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { API_ERROR } from './shared/guards/constants';
import { BehaviorSubject } from 'rxjs';


//import { Component, ModuleWithProviders, NgModule } from '@angular/core';


//import { CommonModule } from '@angular/common';
//import { MyModule } from './my-module';
//import { ThemeModule } from './theme/theme.module';

//
@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent,
      
  ],
  
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    
  
  ],
  providers:[
    AppInterceptorProvider,
    {
      provide:API_ERROR,
      useValue: new BehaviorSubject(null)
    }
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
