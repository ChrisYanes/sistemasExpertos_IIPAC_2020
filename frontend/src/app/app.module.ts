import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SecondNavbarComponent } from './components/second-navbar/second-navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PanelProyectosComponent } from './components/panel-proyectos/panel-proyectos.component';
import { InfoComponent } from './components/info/info.component';
import { TarifasComponent } from './components/tarifas/tarifas.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { DriveComponent } from './components/drive/drive.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingInfoComponent } from './components/landing-info/landing-info.component';
import {ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SecondNavbarComponent,
    SidebarComponent,
    LoginComponent,
    LandingComponent,
    RegistroComponent,
    PanelProyectosComponent,
    InfoComponent,
    TarifasComponent,
    ServiciosComponent,
    DriveComponent,
    LandingInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
