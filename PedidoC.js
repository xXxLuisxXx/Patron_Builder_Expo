"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoCompletoBuilder = void 0;
var Pedido_1 = require("./Pedido");
var PedidoCompletoBuilder = /** @class */ (function () {
    function PedidoCompletoBuilder() {
        this.pedido = new Pedido_1.Pedido();
    }
    PedidoCompletoBuilder.prototype.agregarComida = function () {
        this.pedido.agregarItem(" 🍔 Hamburgesa con papas");
    };
    PedidoCompletoBuilder.prototype.agregarBebida = function () {
        this.pedido.agregarItem(" 🥤 Jugo de naranja ");
    };
    PedidoCompletoBuilder.prototype.agregarPostre = function () {
        this.pedido.agregarItem(" 🍨 Helado de vainilla");
    };
    PedidoCompletoBuilder.prototype.obtenerPedido = function () {
        return this.pedido;
    };
    return PedidoCompletoBuilder;
}());
exports.PedidoCompletoBuilder = PedidoCompletoBuilder;
