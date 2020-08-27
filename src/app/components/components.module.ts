import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal.component';
import { DomaineComponent } from './entreprise/domaine/domaine.component';
import { RecrutementComponent } from './entreprise/recrutement/recrutement.component';
import { CharteQualiteComponent } from './entreprise/charte-qualite/charte-qualite.component';
import { FormComponent } from './entreprise/recrutement/form/form.component';

import { CarbonateComponent } from './gammeDeProduits/carbonate/carbonate.component';
import { ChauxComponent } from './gammeDeProduits/chaux/chaux.component';
import { SiliceComponent } from './gammeDeProduits/silice/silice.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module
    ],
    declarations: [
        ComponentsComponent,
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NucleoiconsComponent,
        NotificationComponent,
        NgbdModalComponent,
        NgbdModalContent,
        DomaineComponent,
        RecrutementComponent,
        CharteQualiteComponent,
        FormComponent,
       
        CarbonateComponent,
        ChauxComponent,
        SiliceComponent
    ],
    entryComponents: [NgbdModalContent],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
