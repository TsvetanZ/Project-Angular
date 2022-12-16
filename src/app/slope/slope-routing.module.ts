import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { NewSlopeComponent } from "./new-slope/new-slope.component";
import { SlopeDetailComponent } from "./slope-detail/slope-detail.component";
//import { SlopyListComponent } from "./slopy-list/slopy-list.component";

const routes: Routes = [
    {
        path: 'slope',
        children: [
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
              component: SlopeDetailComponent
            }
        ]
    }
];

export const SlopeRoutingModule = RouterModule.forChild(routes);