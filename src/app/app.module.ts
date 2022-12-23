import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
//import { ResentPostListComponent } from './slope/resent-post-list/resent-post-list.component';
import { HttpClientModule } from '@angular/common/http';
//import { MainComponent } from './slope/main/main.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module'; // премахното ол lazy modul
import { SlopeModule } from './slope/slope.module';  // премахното ол lazy modul
import { AppInterceptorProvider } from './app.interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { API_ERROR } from './shared/guards/constants';
import { BehaviorSubject } from 'rxjs';
import { NgOptimizedImage } from '@angular/common';
import { ImageUploadComponent } from './image-upload/image-upload.component';


//import { Component, ModuleWithProviders, NgModule } from '@angular/core';


//import { CommonModule } from '@angular/common';
//import { MyModule } from './my-module';
//import { ThemeModule } from './theme/theme.module';

//
@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent,
    ImageUploadComponent,
    
      
  ],
  
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    NgOptimizedImage,
    
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
