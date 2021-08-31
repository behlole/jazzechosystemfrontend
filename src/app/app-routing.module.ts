import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page404Component} from "./page404/page404.component";

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
    path: '**',
    component: Page404Component,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
