"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var Menu = /** @class */ (function () {
    function Menu(builder) {
        this.builder = builder;
    }
    Menu.prototype.construirMenuCompleto = function () {
        this.builder.agregarComida();
        this.builder.agregarBebida();
        this.builder.agregarPostre();
    };
    Menu.prototype.construirMenuLigero = function () {
        this.builder.agregarComida();
        this.builder.agregarBebida();
    };
    return Menu;
}());
exports.Menu = Menu;
