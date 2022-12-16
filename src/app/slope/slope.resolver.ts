import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ApiService } from "src/app/api.service";
import { ISlope } from "../shared/interfaces";

@Injectable({
    providedIn: 'root'
})

export class SlopeResolver implements Resolve<ISlope | null> {
    constructor (private apiService: ApiService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ISlope | null |Observable<ISlope> | Promise<ISlope> {
            const slopeId = route.params['id'];
            console.log(slopeId)
            if(!slopeId) {
                 this.router.navigate(['/slope/recent']);
                 return null;
            }
            return this.apiService.loadSlope(slopeId);
    }
}