import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { LoginComponent } from 'src/app/auth/pages/login/login.component';
import { AuthRoutingModule } from 'src/app/auth/auth-routing.module';
import { AdminComponent } from 'src/app/auth/pages/admin/admin.component';

@NgModule({
  declarations: [
    LoginComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  exports: [
    LoginComponent,
  ],
})
export class AuthModule { }
