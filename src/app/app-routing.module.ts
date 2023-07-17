import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { mainLayoutRoute } from './routes/main-layout.routes';
import { MainLayoutComponent } from './components/shared/main-layout/main-layout.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: MainLayoutComponent, children: mainLayoutRoute },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
