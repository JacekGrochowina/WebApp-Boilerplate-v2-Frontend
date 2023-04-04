import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputModule } from "../../../../shared/components/input";
import { ButtonModule } from "../../../../shared/components/button";
import { InputPasswordModule } from "../../../../shared/components/input-password";


@NgModule({
  declarations: [
    LoginFormComponent
  ],
  exports: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule,
    ButtonModule,
    InputPasswordModule
  ]
})
export class LoginFormModule {}
