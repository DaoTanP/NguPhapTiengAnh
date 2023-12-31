import { Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { DetailComponent } from "../components/detail/detail.component";

export const mainLayoutRoute: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'details/:id', component: DetailComponent },
]