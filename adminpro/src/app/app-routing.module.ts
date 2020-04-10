import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NopageFoundComponent } from './shared/nopage-found/nopage-found.component';
import { RegisterComponent } from './login/register.component';
import { PagesComponent } from './pages/pages.component';
import { LoginGuard } from './services/guards/login-guard.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: PagesComponent,
    canActivate: [ LoginGuard ],
    loadChildren: './pages/pages.module#PagesModule'
  },
  { path: '**', component: NopageFoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot( routes, { useHash: true } );
