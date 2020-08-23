
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondNavbarComponent } from './components/second-navbar/second-navbar.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LandingComponent } from './components/landing/landing.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PanelProyectosComponent } from './components/panel-proyectos/panel-proyectos.component';
import { LoginComponent } from './components/login/login.component';
import { InfoComponent } from './components/info/info.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { TarifasComponent } from './components/tarifas/tarifas.component';
import { DriveComponent } from './components/drive/drive.component';
import { LandingInfoComponent } from './components/landing-info/landing-info.component';

const routes: Routes = [
  {
    path: '', component:LandingInfoComponent
  },
  {
    path: 'header', component:HeaderComponent
  },
  {
    path: 'secondNavbar', component:SecondNavbarComponent
  },
  {
    path: 'principal', component:LandingInfoComponent
  },
  {
    path: 'info', component:InfoComponent
  },
  {
    path: 'tarifas', component:TarifasComponent
  },
  {
    path: 'servicios', component:ServiciosComponent
  },
  {
    path: 'login', component:LoginComponent
  },
  {
    path: 'registro', component:RegistroComponent
  },
  {
    path: 'drive', component:DriveComponent
  },
  {
    path: 'sidebar', component:SidebarComponent
  },
  {
    path: 'panel', component:PanelProyectosComponent
  },
  {
    path: 'footer', component:FooterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
