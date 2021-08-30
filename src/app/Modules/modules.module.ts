import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModulesComponent} from "./modules.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {
    path: '',
    component: ModulesComponent
  },
];

@NgModule({
  declarations: [ModulesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ModulesModule {
}
