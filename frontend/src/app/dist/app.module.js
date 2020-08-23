"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var angular_fontawesome_1 = require("@fortawesome/angular-fontawesome");
var header_component_1 = require("./components/header/header.component");
var footer_component_1 = require("./components/footer/footer.component");
var second_navbar_component_1 = require("./components/second-navbar/second-navbar.component");
var sidebar_component_1 = require("./components/sidebar/sidebar.component");
var login_component_1 = require("./components/login/login.component");
var landing_component_1 = require("./components/landing/landing.component");
var registro_component_1 = require("./components/registro/registro.component");
var panel_proyectos_component_1 = require("./components/panel-proyectos/panel-proyectos.component");
var info_component_1 = require("./components/info/info.component");
var tarifas_component_1 = require("./components/tarifas/tarifas.component");
var servicios_component_1 = require("./components/servicios/servicios.component");
var drive_component_1 = require("./components/drive/drive.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var landing_info_component_1 = require("./components/landing-info/landing-info.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                second_navbar_component_1.SecondNavbarComponent,
                sidebar_component_1.SidebarComponent,
                login_component_1.LoginComponent,
                landing_component_1.LandingComponent,
                registro_component_1.RegistroComponent,
                panel_proyectos_component_1.PanelProyectosComponent,
                info_component_1.InfoComponent,
                tarifas_component_1.TarifasComponent,
                servicios_component_1.ServiciosComponent,
                drive_component_1.DriveComponent,
                landing_info_component_1.LandingInfoComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                ng_bootstrap_1.NgbModule,
                angular_fontawesome_1.FontAwesomeModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
