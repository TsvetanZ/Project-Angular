import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SlopyListComponent } from './slopy-list/slopy-list.component';
import { ResentPostListComponent } from './resent-post-list/resent-post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SlopyListComponent,
    ResentPostListComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
