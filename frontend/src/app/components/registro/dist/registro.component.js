"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegistroComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var RegistroComponent = /** @class */ (function () {
    function RegistroComponent(httpClient) {
        this.httpClient = httpClient;
        this.personas = []; //Arreglo de cualquier cosa
        this.formularioRegistro = new forms_1.FormGroup({
            nombre: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.maxLength(10)]),
            apellido: new forms_1.FormControl('', [forms_1.Validators.required]),
            email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]),
            password: new forms_1.FormControl('', [forms_1.Validators.required]),
            dia: new forms_1.FormControl('', [forms_1.Validators.required]),
            mes: new forms_1.FormControl('', [forms_1.Validators.required]),
            anio: new forms_1.FormControl('', [forms_1.Validators.required])
        });
        this.backendHost = 'http://localhost:8888';
        this.meses = [
            {
                numeroMes: 1,
                nombreMes: 'Enero'
            },
            {
                numeroMes: 2,
                nombreMes: 'Febrero'
            },
            {
                numeroMes: 3,
                nombreMes: 'Marzo'
            },
            {
                numeroMes: 4,
                nombreMes: 'Abril'
            },
            {
                numeroMes: 5,
                nombreMes: 'Mayo'
            },
            {
                numeroMes: 6,
                nombreMes: 'Junio'
            },
            {
                numeroMes: 7,
                nombreMes: 'Julio'
            },
            {
                numeroMes: 8,
                nombreMes: 'Agosto'
            },
            {
                numeroMes: 9,
                nombreMes: 'Septiembre'
            },
            {
                numeroMes: 10,
                nombreMes: 'Octubre'
            },
            {
                numeroMes: 11,
                nombreMes: 'Noviembre'
            },
            {
                numeroMes: 12,
                nombreMes: 'Diciembre'
            }
        ];
        this.editando = false;
        this.dias = Array(31).fill(0).map(function (x, i) { return (i + 1); });
    }
    RegistroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpClient.get(this.backendHost + "/usuarios")
            .subscribe(function (res) {
            _this.personas = res;
            console.log(_this.personas);
        });
    };
    Object.defineProperty(RegistroComponent.prototype, "nombre", {
        get: function () {
            return this.formularioRegistro.get('nombre');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegistroComponent.prototype, "dia", {
        get: function () {
            return this.formularioRegistro.get('dia');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegistroComponent.prototype, "apellido", {
        get: function () {
            return this.formularioRegistro.get('apellido');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegistroComponent.prototype, "email", {
        get: function () {
            return this.formularioRegistro.get('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegistroComponent.prototype, "password", {
        get: function () {
            return this.formularioRegistro.get('password');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegistroComponent.prototype, "fechaNacimiento", {
        get: function () {
            return this.formularioRegistro.get('fechaNacimiento');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegistroComponent.prototype, "pais", {
        get: function () {
            return this.formularioRegistro.get('pais');
        },
        enumerable: false,
        configurable: true
    });
    RegistroComponent.prototype.guardar = function () {
        var _this = this;
        console.log('Formulario válido:', this.formularioRegistro.valid);
        this.httpClient.post(this.backendHost + "/usuarios", this.formularioRegistro.value)
            .subscribe(function (res) {
            console.log(res);
            _this.personas.push(res);
        });
    };
    RegistroComponent.prototype.eliminar = function (id) {
        var _this = this;
        console.log("Eliminar el elemento con el ID: " + id);
        this.httpClient["delete"](this.backendHost + "/usuarios/" + id)
            .subscribe(function (res) {
            console.log(res);
            if (res.ok == 1) {
                _this.personas = _this.personas.filter(function (item) { return item._id != id; });
            }
        });
    };
    RegistroComponent.prototype.editar = function (id) {
        var _this = this;
        this.editando = true;
        this.httpClient.get(this.backendHost + "/usuarios/" + id)
            .subscribe(function (res) {
            console.log(res);
            _this.formularioRegistro.get('nombre').setValue(res.nombre);
            _this.formularioRegistro.get('apellido').setValue(res.apellido);
            _this.formularioRegistro.get('email').setValue(res.email);
            _this.formularioRegistro.get('password').setValue(res.password);
            _this.formularioRegistro.get('dia').setValue(res.fechaNacimiento.dia);
            _this.formularioRegistro.get('mes').setValue(res.fechaNacimiento.mes);
            _this.formularioRegistro.get('anio').setValue(res.fechaNacimiento.anio);
        });
    };
    RegistroComponent.prototype.nuevo = function () {
        this.editando = false;
        this.formularioRegistro.get('nombre').setValue(null);
        this.formularioRegistro.get('apellido').setValue(null);
        this.formularioRegistro.get('email').setValue(null);
        this.formularioRegistro.get('password').setValue(null);
        this.formularioRegistro.get('dia').setValue(null);
        this.formularioRegistro.get('mes').setValue(null);
        this.formularioRegistro.get('anio').setValue(null);
    };
    RegistroComponent.prototype.actualizar = function () {
    };
    RegistroComponent = __decorate([
        core_1.Component({
            selector: 'app-registro',
            templateUrl: './registro.component.html',
            styleUrls: ['./registro.component.css']
        })
    ], RegistroComponent);
    return RegistroComponent;
}());
exports.RegistroComponent = RegistroComponent;
