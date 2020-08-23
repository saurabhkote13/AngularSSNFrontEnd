import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SSNRoutingModule } from './ssn-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SSNComponent } from './SSN.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SSNRoutingModule,
  ]
})
export class SSNModule { }