"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DriveComponent = void 0;
var core_1 = require("@angular/core");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var DriveComponent = /** @class */ (function () {
    function DriveComponent() {
        this.faPlus = free_solid_svg_icons_1.faPlus;
    }
    DriveComponent.prototype.ngOnInit = function () {
    };
    DriveComponent = __decorate([
        core_1.Component({
            selector: 'app-drive',
            templateUrl: './drive.component.html',
            styleUrls: ['./drive.component.css']
        })
    ], DriveComponent);
    return DriveComponent;
}());
exports.DriveComponent = DriveComponent;
