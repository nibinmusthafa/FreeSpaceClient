import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // {path:'', redirectTo: '/login', pathMatch: 'full'},
  {path:"", loadChildren:()=> import('./Modules/auth/auth.module').then(x=>x.AuthModule)},
  {path:"admin", loadChildren:()=> import('./Modules/admin/admin.module').then(x=>x.AdminModule)},
  {path:"designer", loadChildren:()=> import('./Modules/designer/designer.module').then(x=>x.DesignerModule)},
  {path:"supervisor", loadChildren:()=> import('./Modules/supervisor/supervisor.module').then(x=>x.SupervisorModule)},
  {path:"factory", loadChildren:()=> import('./Modules/factory/factory.module').then(x=>x.FactoryModule)},
  {path:"finance", loadChildren:()=> import('./Modules/finance/finance.module').then(x=>x.FinanceModule)},
  {path:"lead", loadChildren:()=> import('./Modules/lead/lead.module').then(x=>x.LeadModule)},
  {path:"superadmin", loadChildren:()=> import('./Modules/superadmin/superadmin.module').then(x=>x.SuperadminModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
