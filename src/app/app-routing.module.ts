import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

const routes: Routes = [{
  path: '', component: AppComponent, pathMatch: 'full',
  
  children: [
  // {path: 'login', component: LoginComponent, pathMatch: 'full',},
  // { path: 'dashboard', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: 'src/app/views/dashboard/dashboard.module#DashboardModule',

  },

  // {
  //   path: 'leads',
  //   loadChildren: './views/leads/leads.module#LeadsModule',
  // },
  // {
  //   path: 'companies',
  //   loadChildren: './views/companies/companies.module#CompaniesModule',
  // },
  
  // {
  //   path: 'contacts',
  //   loadChildren: './views/contacts.module#ContactsModule',
  // },
  
  // {
  //   path: 'products',
  //   loadChildren: './views/products.module#ProductsModule',
  // },
    { path: '**', redirectTo: '' }
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
