import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProvacyPolicyPageRoutingModule } from './provacy-policy-routing.module';

import { ProvacyPolicyPage } from './provacy-policy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProvacyPolicyPageRoutingModule
  ],
  declarations: [ProvacyPolicyPage]
})
export class ProvacyPolicyPageModule {}
