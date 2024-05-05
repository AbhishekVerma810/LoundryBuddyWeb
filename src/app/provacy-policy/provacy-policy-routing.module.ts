import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProvacyPolicyPage } from './provacy-policy.page';

const routes: Routes = [
  {
    path: '',
    component: ProvacyPolicyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProvacyPolicyPageRoutingModule {}
