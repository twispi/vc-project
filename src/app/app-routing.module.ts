import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  // { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    // { path: 'home', redirectTo: '/home', pathMatch: 'full' },
    path: '', redirectTo: '/', pathMatch: 'full'},
    { path: '', component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule',
      },
    {
      path: 'dashboard', redirectTo: '/dashboard'
    },
    {
      path: 'products',
      loadChildren: './views/products/products.module#ProductsModule',
    },
    {
      path: 'products', redirectTo: '/products'
    },
    {
      path: 'leads',
      loadChildren: './views/leads/leads.module#LeadsModule',
    },
    {
      path: 'leads', redirectTo: '/leads'
    },
    {
      path: 'contacts',
      loadChildren: './views/contacts/contacts.module#ContactsModule',
    },
    {
      path: 'contacts', redirectTo: '/contacts'
    },
    {
      path: 'companies',
      loadChildren: './views/companies/companies.module#CompaniesModule',
    },
    {
      path: 'companies', redirectTo: '/companies'
    },
    {
      path: 'contacts', redirectTo: '/contacts'
    },



  ]
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
  ];




@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: PreloadAllModules})],
  // exports: [RouterModule]
  // imports: [
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})
  // ],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
