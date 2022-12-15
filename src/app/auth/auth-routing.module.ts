import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";

//const sameroutes: Routes  = [
//    {
//        path: 'auth/login',
//        component:LoginComponent
//    },
//    {
//        path: 'auth/register',
//        component:RegisterComponent
//    },
//    {
//        path: 'auth/logout',
//        component: LogoutComponent
//    },
//    {
//        path: 'auth/profile',
//        component:ProfileComponent
//    },
//];

const routes: Routes = [
    {
        path: 'auth',
        children: [
            {
            path: 'login',
            component:LoginComponent
        },
        {
            path: 'register',
            component:RegisterComponent
        },
        {
            path: 'auth/logout',
            component: LogoutComponent
        },
        {
            path: 'profile',
            component:ProfileComponent
        },
        ]
    }
];

export const AuthRoutingModule = RouterModule.forChild(routes);