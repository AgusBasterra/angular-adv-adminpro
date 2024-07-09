import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Módulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';


const routes: Routes = [  
  {path:'', component: DashboardComponent },
  {path:'**', component: NopagefoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
