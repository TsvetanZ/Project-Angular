import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { SlopeModule } from '../slope/slope.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    SlopeModule
  ],
   exports: [
  HeaderComponent, 
  FooterComponent,
  HomeComponent,
  PageNotFoundComponent
  ]
})
export class CoreModule { }
