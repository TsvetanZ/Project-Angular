import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { NewSlopeComponent } from "./new-slope/new-slope.component";
import { SlopeDetailComponent } from "./slope-detail/slope-detail.component";
import { SlopeResolver } from "./slope.resolver";
//import { SlopyListComponent } from "./slopy-list/slopy-list.component";

const routes: Routes = [
    
            {
                path: 'recent',
                component: MainComponent
            },
            {
              path: 'new',
              component: NewSlopeComponent
            },
            {
              path: 'detail/:id',
              resolve: {
                slope: SlopeResolver
              },
              component: SlopeDetailComponent
            }
     
];

export const SlopeRoutingModule = RouterModule.forChild(routes);