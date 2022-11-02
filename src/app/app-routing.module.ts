import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/auth/guards/auth.guard';
import { ErrorComponent } from 'src/app/core/components/error/error.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('src/app/auth/auth.module')
        .then(a => a.AuthModule),
  },
  {
    path: 'main',
    loadChildren: () =>
      import('src/app/youtube/youtube.module').then(a => a.YoutubeModule),
    canLoad: [AuthGuard],
  },
  {
    path: '404',
    component: ErrorComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
