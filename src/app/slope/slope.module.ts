import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlopyListComponent } from './slopy-list/slopy-list.component';
import { SlopeRoutingModule } from './slope-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NewSlopeComponent } from './new-slope/new-slope.component';
import { SlopeDetailComponent } from './slope-detail/slope-detail.component';



@NgModule({
  declarations: [
    SlopyListComponent,
    NewSlopeComponent,
    SlopeDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SlopeRoutingModule
    
  ],
  exports:[
    SlopyListComponent
  ]
})
export class SlopeModule { }
