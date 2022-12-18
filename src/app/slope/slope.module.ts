import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlopyListComponent } from './slopy-list/slopy-list.component';
import { SlopeRoutingModule } from './slope-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NewSlopeComponent } from './new-slope/new-slope.component';
import { SlopeDetailComponent } from './slope-detail/slope-detail.component';
import { MainComponent } from './main/main.component';
import { ResentPostListComponent } from './resent-post-list/resent-post-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SlopyListComponent,
    NewSlopeComponent,
    SlopeDetailComponent,
    MainComponent,
    ResentPostListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    SlopeRoutingModule,
    
  ],
  exports:[
    SlopyListComponent,
    MainComponent
  ]
})
export class SlopeModule { }
