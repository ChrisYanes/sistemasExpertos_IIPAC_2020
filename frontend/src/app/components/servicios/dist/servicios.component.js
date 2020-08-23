"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ServiciosComponent = void 0;
var core_1 = require("@angular/core");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var free_solid_svg_icons_2 = require("@fortawesome/free-solid-svg-icons");
var free_solid_svg_icons_3 = require("@fortawesome/free-solid-svg-icons");
var ServiciosComponent = /** @class */ (function () {
    function ServiciosComponent() {
        this.faFolder = free_solid_svg_icons_1.faFolder;
        this.faCode = free_solid_svg_icons_3.faCode;
        this.faFileCode = free_solid_svg_icons_2.faFileCode;
    }
    ServiciosComponent.prototype.ngOnInit = function () {
    };
    ServiciosComponent = __decorate([
        core_1.Component({
            selector: 'app-servicios',
            templateUrl: './servicios.component.html',
            styleUrls: ['./servicios.component.css']
        })
    ], ServiciosComponent);
    return ServiciosComponent;
}());
exports.ServiciosComponent = ServiciosComponent;
