import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

/**
 * Main Routes for modules
 */
const routes: Routes = [
  {
    path: '',
    loadChildren: () => {
      return import('./Modules/modules.module').then(m => m.ModulesModule);
    },
  },
  {
    path: 'users',
    loadChildren: () => import('./Modules/User/user.module').then(m => m.UserModule),
  },
  {
    path: 'users/auth',
    loadChildren: () => import('./Modules/User/authentication/authentication.module').then(m => m.AuthenticationModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
