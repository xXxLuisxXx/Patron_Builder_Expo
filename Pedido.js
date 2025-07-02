"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
var Pedido = /** @class */ (function () {
    function Pedido() {
        this.items = [];
    }
    Pedido.prototype.agregarItem = function (item) {
        this.items.push(item);
    };
    Pedido.prototype.mostrarPedido = function () {
        console.log("🧾 Pedido del cliente:");
        this.items.forEach(function (item, index) {
            console.log("".concat(index + 1, ". ").concat(item));
        });
    };
    return Pedido;
}());
exports.Pedido = Pedido;
