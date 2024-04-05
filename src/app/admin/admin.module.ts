import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from './shared/shared.module';
import { GestProfComponent } from './gest-prof/gest-prof.component';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [GestProfComponent, RegistrationComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
