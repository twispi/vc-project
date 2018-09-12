import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [{
  path: '', component: AppComponent, pathMatch: 'full',
  
  children: [
  // {path: 'login', component: LoginComponent, pathMatch: 'full',},
  {
    path: 'dashboard',
    loadChildren: './views/dashboard/dashboard.module#DashboardModule',
  },
  {
    path: 'leads',
    loadChildren: './views/leads/leads.module#LeadsModule',
  },
  {
    path: 'companies',
    loadChildren: './views/companies/companies.module#CompaniesModule',
  },
  
  {
    path: 'contacts',
    loadChildren: './views/contacts.module#ContactsModule',
  },
  
  {
    path: 'products',
    loadChildren: './views/products.module#ProductsModule',
  },
  ]



}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // exports: [RouterModule]
  // imports: [
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})
  // ],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
