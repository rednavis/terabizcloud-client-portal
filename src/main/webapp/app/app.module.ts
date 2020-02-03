import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ClientSharedModule } from 'app/shared/shared.module';
import { ClientCoreModule } from 'app/core/core.module';
import { ClientAppRoutingModule } from './app-routing.module';
import { ClientHomeModule } from './home/home.module';
import { ClientEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    ClientSharedModule,
    ClientCoreModule,
    ClientHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ClientEntityModule,
    ClientAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class ClientAppModule {}
