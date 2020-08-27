import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { DomaineComponent } from './components/entreprise/domaine/domaine.component'
import { CharteQualiteComponent } from './components/entreprise/charte-qualite/charte-qualite.component'
import { RecrutementComponent } from './components/entreprise/recrutement/recrutement.component'
import { CarbonateComponent } from './components/gammeDeProduits/carbonate/carbonate.component'

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'domaine', component: DomaineComponent},
    { path: 'quality', component: CharteQualiteComponent},
    { path: 'jobs', component: RecrutementComponent},
    { path: 'carbonate', component: CarbonateComponent},
    { path: 'home',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
      //,{useHash: true})
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
