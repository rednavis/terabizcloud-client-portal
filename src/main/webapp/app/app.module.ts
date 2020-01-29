import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ClientportalSharedModule } from 'app/shared/shared.module';
import { ClientportalCoreModule } from 'app/core/core.module';
import { ClientportalAppRoutingModule } from './app-routing.module';
import { ClientportalHomeModule } from './home/home.module';
import { ClientportalEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    ClientportalSharedModule,
    ClientportalCoreModule,
    ClientportalHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ClientportalEntityModule,
    ClientportalAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class ClientportalAppModule {}
